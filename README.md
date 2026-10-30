# 🤖 Generative AI, LangChain & LangGraph Learning Repository

Welcome to my AI learning repository! 🚀

This repository contains my hands-on learning journey in **Generative AI, Large Language Models (LLMs), LangChain, LangGraph, AI Agents, and AI-powered applications**.

My goal is to understand how LLMs work and build practical AI applications, from simple prompt-based programs to intelligent AI agents that can use tools, manage workflows, and interact with external data.

---

## 🎯 Learning Objectives

- Understand Generative AI and Large Language Models.
- Work with different LLM models and providers.
- Build applications using LangChain.
- Create AI agents using tools and function calling.
- Build stateful AI workflows using LangGraph.
- Implement parallel and conditional execution.
- Generate structured responses using Pydantic.
- Build AI assistants and chatbot applications.
- Explore AI-powered database interaction and data retrieval.
- Develop real-world AI applications using Python.

---

## 🛠️ Technologies & Tools

| Technology        | Purpose                                       |
| ----------------- | --------------------------------------------- |
| Python            | Main programming language                     |
| LangChain         | LLM application development                   |
| LangGraph         | Stateful AI workflows and agents              |
| OpenAI API        | Access to GPT models                          |
| GPT-5 Mini        | LLM experimentation                           |
| GPT-5 Nano        | Lightweight model experimentation             |
| Pydantic          | Structured output and data validation         |
| TypedDict         | Graph state definition                        |
| dotenv            | Environment variable management               |
| Wikipedia API     | Knowledge retrieval                           |
| DuckDuckGo Search | Web search integration                        |
| Jupyter Notebook  | Experiments and practical learning            |
| uv                | Python environment and package management     |
| PostgreSQL / SQL  | Database learning and integration exploration |

---

## 📚 Topics Covered

### 1. Python Fundamentals for AI

- Python functions and modules.
- Type hints.
- TypedDict.
- Environment variables.
- Package management.
- Virtual environments.
- Working with APIs.
- Exception handling.

### 2. Large Language Models (LLMs)

- Introduction to LLMs.
- Understanding how LLMs generate responses.
- Connecting applications with OpenAI models.
- Using different models:
  - GPT-5 Mini
  - GPT-5 Nano
- Model parameters:
  - Temperature
  - Model selection
  - API configuration
- Invoking models using `llm.invoke()`.
- Understanding model responses.

### 3. LangChain

Learning how to build LLM-powered applications using LangChain.

**Topics:**

- ChatOpenAI
- PromptTemplate
- ChatPromptTemplate
- LCEL (LangChain Expression Language)
- Chains
- Tool creation using `@tool`
- Tool binding using `bind_tools()`
- Tool execution using `.invoke()`
- Wikipedia integration
- DuckDuckGo search integration
- Custom tools
- Structured output
- Pydantic models

### 4. Structured Output with Pydantic

Learning how to make LLM responses predictable and structured.

Example:

```python
from pydantic import BaseModel, Field
from typing import Literal

class llm_schema(BaseModel):
    funny_flag: Literal["funny", "not funny"] = Field(
        description="Whether the joke is funny or not"
    )

    feedback: str = Field(
        description="Feedback on the joke"
    )

llm_with_schema = llm.with_structured_output(llm_schema)

response = llm_with_schema.invoke(
    "Evaluate this joke and provide feedback."
)

print(response.funny_flag)
print(response.feedback)
```

### 5. AI Tools and Function Calling

Learning how AI models can use external tools to perform tasks.

**Implemented concepts:**

- Creating custom tools.
- Using the `@tool` decorator.
- Binding tools to an LLM.
- Calling tools based on user queries.
- Executing multiple tool calls.
- Returning tool results to the LLM.
- Building tool-calling workflows.

**Tools explored:**

- Wikipedia Search
- DuckDuckGo Search
- Custom Personal Information Tool

### 6. LangGraph

Learning to build stateful AI workflows and agents using LangGraph.

**Topics:**

- StateGraph
- START and END
- Nodes
- Edges
- Conditional edges
- Graph compilation
- State management
- Graph invocation
- Streaming graph execution
- Tool execution nodes
- Conditional routing
- Cyclic workflows
- Parallel execution
- Iterative AI workflows

### 7. LangGraph Practical Implementations

#### A. AI Joke Generator with Feedback Loop

Built a workflow where an LLM generates a joke, another step evaluates it, and feedback is used to improve the joke.

**Workflow:**

```text
START
  |
  v
Generate Joke
  |
  v
Evaluate Joke
  |
  v
Is Joke Funny?
  |
  +---- No ----> Generate Improved Joke
  |                     |
  |                     v
  |                 Evaluate Again
  |
  +---- Yes ----> END
```

**Concepts learned:**

- LLM-generated content.
- Structured evaluation using Pydantic.
- Conditional routing.
- Feedback-based improvement.
- Iteration limits.

#### B. Parallel Social Media Post Generator

Built a parallel workflow that generates content for multiple social media platforms using the same topic.

**Platforms:**

- Instagram
- Twitter
- LinkedIn

**Workflow:**

```text
             START
               |
       Artificial Intelligence
               |
       +-------+-------+
       |       |       |
       v       v       v
   Instagram Twitter LinkedIn
       |       |       |
       v       v       v
   Insta Post  Tweet  LinkedIn Post
       |       |       |
       +-------+-------+
               |
              END
```

**Concepts learned:**

- Parallel node execution.
- Shared graph state.
- Independent state updates.
- Combining node outputs.
- Avoiding concurrent state update conflicts.

#### C. Tool-Calling AI Agent

Built a custom tool-calling workflow where an LLM decides when to use available tools.

**Workflow:**

```text
START
  |
  v
LLM Node
  |
  v
Tool Required?
  |
  +---- Yes ----> Tool Node
  |                   |
  |                   v
  |                LLM Node
  |
  +---- No ------> END
```

**Concepts learned:**

- LLM tool binding.
- Tool selection.
- Tool execution.
- ToolMessage.
- AIMessage.
- HumanMessage.
- Conditional edges.
- Agent execution loops.

---

## 🧠 AI Applications I Am Exploring

### 1. AI Assistant

Building an AI assistant that can:

- Understand user questions.
- Generate intelligent responses.
- Use external tools.
- Search for information.
- Retrieve relevant data.
- Handle multi-step tasks.

### 2. AI Database Assistant

Exploring how AI can interact with databases to:

- Understand natural-language database questions.
- Convert user questions into SQL queries.
- Retrieve information from databases.
- Summarize database results.
- Help users understand their data.

### 3. AI Agents

Exploring intelligent agents that can:

- Use multiple tools.
- Make decisions based on context.
- Execute multi-step workflows.
- Maintain state.
- Handle conditional logic.
- Automate repetitive tasks.

---

## 📁 Repository Structure

The repository is organized around practical experiments and learning modules.

```text
AI-Learning/
│
├── LangChain/
│   ├── LLM/
│   ├── Prompt_Templates/
│   ├── Chains/
│   ├── Structured_Output/
│   ├── Tools/
│   └── AI_Agents/
│
├── LangGraph/
│   ├── Basic_Graph/
│   ├── State_Management/
│   ├── Conditional_Edges/
│   ├── Parallel_Execution/
│   ├── Feedback_Loop/
│   └── Tool_Calling_Agent/
│
├── AI_Assistant/
│
├── Database_AI/
│
├── .env
├── .gitignore
├── pyproject.toml
└── README.md
```

*Note: This is a suggested organization. Adjust the folder names to match your actual repository.*

---

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd AI-Learning
```

### 3. Create a virtual environment using uv

```bash
uv venv
```

### 4. Activate the environment

Windows:

```bash
.venv\Scripts\activate
```

### 5. Install dependencies

Install the packages used by your project:

```bash
uv add langchain langchain-openai langgraph
uv add python-dotenv pydantic
uv add langchain-community wikipedia duckduckgo-search
```

### 6. Configure environment variables

Create a `.env` file:

```env
OPENAI_API_KEY=your_openai_api_key
```

**Important:** Never push your `.env` file or API keys to GitHub.

Add this to `.gitignore`:

```gitignore
.env
.venv/
__pycache__/
.ipynb_checkpoints/
```

---

## 🚀 My Learning Roadmap

- [x] Python setup and environment configuration.
- [x] Connect Python applications with OpenAI.
- [x] Experiment with different GPT models.
- [x] Learn LangChain fundamentals.
- [x] Work with prompt templates and chains.
- [x] Create custom tools.
- [x] Integrate Wikipedia and DuckDuckGo.
- [x] Implement structured output using Pydantic.
- [x] Learn LangGraph fundamentals.
- [x] Implement conditional workflows.
- [x] Build parallel execution workflows.
- [x] Build an AI joke generator with feedback.
- [x] Build a tool-calling agent.
- [ ] Build an AI assistant with conversation memory.
- [ ] Integrate an AI assistant with a database.
- [ ] Build an AI SQL query assistant.
- [ ] Build advanced AI agents using LangGraph.
- [ ] Develop and deploy a complete Generative AI application.

---

## 🎯 Goal

My goal is to become a **Generative AI / LLM Application Developer** by developing practical knowledge of Python, LangChain, LangGraph, AI agents, and database-powered AI applications.

I will continue updating this repository as I learn new concepts and build more real-world AI projects.

---

⭐ This repository represents my continuous learning journey in Generative AI and Agentic AI.
