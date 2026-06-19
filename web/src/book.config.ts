export interface PartConfig {
  number: number;
  title: string;
  epigraph: string;
  chapters: number[];
}

export interface ChapterConfig {
  number: number;
  slug: string;
  title: string;
  description: string;
}

export const parts: PartConfig[] = [
  {
    number: 1,
    title: 'Основы',
    epigraph: 'Прежде чем agent сможет думать, процесс должен существовать.',
    chapters: [1, 2, 3, 4],
  },
  {
    number: 2,
    title: 'Core Loop',
    epigraph: 'Сердцебиение agent: stream, действуй, наблюдай, повторяй.',
    chapters: [5, 6, 7],
  },
  {
    number: 3,
    title: 'Multi-Agent Orchestration',
    epigraph: 'Один agent силён. Несколько agents, работающих вместе, меняют масштаб задачи.',
    chapters: [8, 9, 10],
  },
  {
    number: 4,
    title: 'Persistence и Intelligence',
    epigraph: 'Agent без Memory повторяет одни и те же ошибки бесконечно.',
    chapters: [11, 12],
  },
  {
    number: 5,
    title: 'Interface',
    epigraph: 'Всё, что видит пользователь, проходит через этот слой.',
    chapters: [13, 14],
  },
  {
    number: 6,
    title: 'Connectivity',
    epigraph: 'Agent выходит за пределы localhost.',
    chapters: [15, 16],
  },
  {
    number: 7,
    title: 'Performance Engineering',
    epigraph: 'Сделать всё достаточно быстрым, чтобы человек не замечал механики.',
    chapters: [17, 18],
  },
];

export const chapters: ChapterConfig[] = [
  { number: 1, slug: 'ch01-architecture', title: 'Архитектура AI Agent', description: '6 ключевых абстракций, data flow, Permission System, build system' },
  { number: 2, slug: 'ch02-bootstrap', title: 'Начинаем быстро — Bootstrap Pipeline', description: '5-фазный init, module-level I/O parallelism, trust boundary' },
  { number: 3, slug: 'ch03-state', title: 'State. Двухуровневая архитектура', description: 'Bootstrap singleton, AppState store, sticky latches, cost tracking' },
  { number: 4, slug: 'ch04-api-layer', title: 'Разговор с Claude — слой API', description: 'Multi-provider client, Prompt Cache, streaming, error recovery' },
  { number: 5, slug: 'ch05-agent-loop', title: 'Agent Loop', description: 'Разбор query.ts, 4 слоя compression, error recovery, token budgets' },
  { number: 6, slug: 'ch06-tools', title: 'Tools — от определения до исполнения', description: 'Tool interface, 14-шаговый pipeline, Permission System' },
  { number: 7, slug: 'ch07-concurrency', title: 'Параллельное выполнение tools', description: 'Partition algorithm, streaming executor, speculative execution' },
  { number: 8, slug: 'ch08-sub-agents', title: 'Создание sub-agents', description: 'AgentTool, 15-шаговый lifecycle runAgent, встроенные типы agents' },
  { number: 9, slug: 'ch09-fork-agents', title: 'Fork Agents и Prompt Cache', description: 'Byte-identical prefix trick, cache sharing, cost optimization' },
  { number: 10, slug: 'ch10-coordination', title: 'Task, координация и swarms', description: 'Task state machine, Coordinator Mode, swarm messaging' },
  { number: 11, slug: 'ch11-memory', title: 'Memory. Обучение через разговоры', description: 'File-based Memory, 4-type taxonomy, LLM recall, staleness' },
  { number: 12, slug: 'ch12-extensibility', title: 'Расширяемость — skills и hooks', description: 'Two-phase skill loading, lifecycle hooks, snapshot security' },
  { number: 13, slug: 'ch13-terminal-ui', title: 'Terminal UI', description: 'Custom Ink fork, rendering pipeline, double-buffer, pools' },
  { number: 14, slug: 'ch14-input-interaction', title: 'Ввод и взаимодействие', description: 'Key parsing, keybindings, chord support, Vim mode' },
  { number: 15, slug: 'ch15-mcp', title: 'MCP — универсальный Tool Protocol', description: '8 transports, OAuth для MCP, tool wrapping' },
  { number: 16, slug: 'ch16-remote', title: 'Удаленное управление и выполнение в облаке', description: 'Bridge v1/v2, CCR, upstream proxy' },
  { number: 17, slug: 'ch17-performance', title: 'Performance. Каждая миллисекунда и token на счету', description: 'Startup, Context Window, Prompt Cache, rendering, search' },
  { number: 18, slug: 'ch18-epilogue', title: 'Эпилог. Чему мы научились', description: '5 архитектурных ставок, переносимые patterns, будущее agents' },
];

export function getPartForChapter(chapterNumber: number): PartConfig | undefined {
  return parts.find(p => p.chapters.includes(chapterNumber));
}

export function getChapterNumber(slug: string): number {
  const match = slug.match(/^ch(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

export function getAdjacentChapters(chapterNumber: number) {
  const idx = chapters.findIndex(c => c.number === chapterNumber);
  return {
    prev: idx > 0 ? chapters[idx - 1] : null,
    next: idx < chapters.length - 1 ? chapters[idx + 1] : null,
  };
}

export function isFirstChapterOfPart(chapterNumber: number): boolean {
  return parts.some(p => p.chapters[0] === chapterNumber);
}
