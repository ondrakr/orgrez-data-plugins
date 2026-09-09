import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const SERVER_NAME = "orgrez-post-form";
const SERVER_VERSION = "0.7.0";
const TEMPLATE_URI = "ui://widget/orgrez-post-form.html";
const scriptDirectory = dirname(fileURLToPath(import.meta.url));
const templatePath = resolve(scriptDirectory, "../assets/post-form.html");

const tool = {
  name: "open_orgrez_post_form",
  title: "Otevřít formulář příspěvku ORGREZ",
  description:
    "Otevře interaktivní formulář pro nový příspěvek nebo carousel ORGREZ. Použij jej vždy, když uživatel spustí plugin bez kompletního zadání nebo výslovně požádá o formulář.",
  inputSchema: {
    type: "object",
    properties: {},
    additionalProperties: false
  },
  outputSchema: {
    type: "object",
    properties: {
      form: { type: "string", const: "orgrez-post-brief" },
      ready: { type: "boolean" }
    },
    required: ["form", "ready"],
    additionalProperties: false
  },
  annotations: {
    readOnlyHint: true,
    openWorldHint: false,
    destructiveHint: false,
    idempotentHint: true
  },
  _meta: {
    ui: { resourceUri: TEMPLATE_URI },
    "openai/outputTemplate": TEMPLATE_URI,
    "openai/toolInvocation/invoking": "Otevírám formulář…",
    "openai/toolInvocation/invoked": "Formulář je připravený."
  }
};

function write(message) {
  process.stdout.write(`${JSON.stringify(message)}\n`);
}

function success(id, result) {
  write({ jsonrpc: "2.0", id, result });
}

function failure(id, code, message) {
  write({ jsonrpc: "2.0", id, error: { code, message } });
}

async function handle(message) {
  if (!message || message.jsonrpc !== "2.0") return;
  if (message.method?.startsWith("notifications/")) return;

  const { id, method, params = {} } = message;

  if (method === "initialize") {
    success(id, {
      protocolVersion: params.protocolVersion || "2025-06-18",
      capabilities: { tools: {}, resources: {} },
      serverInfo: { name: SERVER_NAME, version: SERVER_VERSION },
      instructions:
        "When the user starts the ORGREZ post generator without a complete brief, call open_orgrez_post_form. The submitted brief returns as a follow-up user message."
    });
    return;
  }

  if (method === "ping") {
    success(id, {});
    return;
  }

  if (method === "tools/list") {
    success(id, { tools: [tool] });
    return;
  }

  if (method === "tools/call") {
    if (params.name !== tool.name) {
      failure(id, -32602, `Unknown tool: ${params.name || "(missing)"}`);
      return;
    }
    success(id, {
      structuredContent: { form: "orgrez-post-brief", ready: true },
      content: [
        {
          type: "text",
          text: "Interaktivní formulář ORGREZ je zobrazen. Po jeho odeslání pokračuj se zadanými hodnotami."
        }
      ]
    });
    return;
  }

  if (method === "resources/list") {
    success(id, {
      resources: [
        {
          uri: TEMPLATE_URI,
          name: "Formulář příspěvku ORGREZ",
          title: "Formulář příspěvku ORGREZ",
          description: "Šestipoložkový formulář pro posty a carousely ORGREZ.",
          mimeType: "text/html;profile=mcp-app"
        }
      ]
    });
    return;
  }

  if (method === "resources/read") {
    if (params.uri !== TEMPLATE_URI) {
      failure(id, -32602, `Unknown resource: ${params.uri || "(missing)"}`);
      return;
    }
    const html = await readFile(templatePath, "utf8");
    success(id, {
      contents: [
        {
          uri: TEMPLATE_URI,
          mimeType: "text/html;profile=mcp-app",
          text: html,
          _meta: {
            ui: { prefersBorder: true },
            "openai/widgetPrefersBorder": true,
            "openai/widgetDescription":
              "Formulář pro zadání značkového příspěvku nebo carouselu ORGREZ."
          }
        }
      ]
    });
    return;
  }

  if (method === "resources/templates/list") {
    success(id, { resourceTemplates: [] });
    return;
  }

  if (method === "prompts/list") {
    success(id, { prompts: [] });
    return;
  }

  failure(id, -32601, `Method not found: ${method}`);
}

let buffer = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (chunk) => {
  buffer += chunk;
  let newlineIndex;
  while ((newlineIndex = buffer.indexOf("\n")) >= 0) {
    const line = buffer.slice(0, newlineIndex).trim();
    buffer = buffer.slice(newlineIndex + 1);
    if (!line) continue;
    try {
      const message = JSON.parse(line);
      Promise.resolve(handle(message)).catch((error) => {
        failure(message.id ?? null, -32603, error?.message || "Internal error");
      });
    } catch (error) {
      failure(null, -32700, error?.message || "Parse error");
    }
  }
});
