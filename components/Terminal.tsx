import React, { useEffect, useState, useCallback } from "react";
import styles from "@/styles/Terminal.module.scss";
import { Fira_Code } from "next/font/google";
import { useRouter } from "next/router";

const firaCode = Fira_Code({
  subsets: ["latin"],
});

interface TerminalProps {
  onTop: boolean;
}

interface CommandInfo {
  name: string;
  description: string;
}

interface FileInterface {
  [key: string]: string | FileInterface;
}

export default function Terminal({ onTop }: TerminalProps) {
  const router = useRouter();

  // TERMINAL RENDERING STATE
  const [history, setHistory] = useState<string[]>([
    'Welcome! Type "help" to get started.',
  ]); // terminal line history
  const [canType, setCanType] = useState<boolean>(false); // can type when not animating

  // LINE STATE
  const [input, setInput] = useState<string>(""); // user input
  const [currentPath, setCurrentPath] = useState<string>("home/projects"); // current path
  useEffect(() => {
    if (currentPath === "home") {
      setHistory((hist) => [...hist, "Terminal: sending you to home page"]);
      setTimeout(() => {
        router.push("/");
      }, 1000);
    }
  }, [currentPath, router]);
  const [helper, setHelper] = useState<string[]>([]); // autocomplete on tab

  const prefix = `andre@prtflio ${
    currentPath.split("/")[currentPath.split("/").length - 1] || "~"
  } $`; // terminal prefix

  // TERMINAL FUNCTIONAL STATE
  // ...

  const handleCommand = useCallback(
    (cmd: string) => {
      const commands: CommandInfo[] = [
        {
          name: "ls",
          description: "List files and directories",
        },
        {
          name: "cd",
          description: "Change directory (usage: cd <directory>, cd ..)",
        },
        {
          name: "open",
          description: "Open file contents (usage: open <file>)",
        },
        {
          name: "cat",
          description: "Alias for open command",
        },
        {
          name: "pwd",
          description: "Print working directory",
        },
        {
          name: "clear",
          description: "Clear terminal",
        },
        {
          name: "help",
          description: "Show this help message",
        },
        {
          name: "man",
          description: "Alias for help command",
        },
      ];
      const files: FileInterface = {
        projects: {
          "wordle-step": {
            "README.md": "Wordle Step description",
          },
          unispaces: {
            "README.md": "UniSpaces description",
          },
          portfolio: {
            "README.md": "Portfolio description",
          },
          chefswap: {
            "README.md": "ChefSwap description",
          },
          "instagram-clone": {
            "README.md": "Instagram clone description",
          },
          "README.md":
            "These are some projects I've been working on in my own time! Ranging from passion projects to learning experiences, I've learned a lot working on these projects and I hope you enjoy them as much as I do!",
        },
      };

      const components = cmd.trim().split(" ");

      if (!components[0]) return;

      const command = components[0];
      const args = components.slice(1);

      if (commands.findIndex((cmd) => cmd.name === command) === -1) {
        setHistory((hist) => [
          ...hist,
          `Terminal: command not found: ${command}`,
        ]);
        return;
      }

      const helpLines = commands.map(
        (cmd) => `${cmd.name} - ${cmd.description}`
      );

      switch (command) {
        case "ls":
          let currentFolder: FileInterface = files;
          currentPath.split("/").forEach((folder, i) => {
            if (i === 0) return;
            currentFolder = currentFolder[folder] as FileInterface;
          });
          if (typeof currentFolder === "object") {
            const folderContentsLine = Object.keys(currentFolder).reduce(
              (pastContents, currentContent) =>
                `${pastContents}\t${currentContent}`
            );
            setHistory((hist) => [...hist, folderContentsLine]);
          } else {
            setHistory((hist) => [...hist, "ls: error: how did you get here?"]);
          }
          break;
        case "cd":
          if (args[0] === "..") {
            const newPath = currentPath
              .split("/")
              .slice(0, currentPath.split("/").length - 1)
              .join("/");
            setCurrentPath(newPath);
          } else if (args[0] === "~") {
            setCurrentPath("home/projects");
          } else {
            let currentFolder: FileInterface = files;
            currentPath.split("/").forEach((folder, i) => {
              if (i === 0) return;
              currentFolder = currentFolder[folder] as FileInterface;
            });

            if (!Object.keys(currentFolder || {}).includes(args[0])) {
              setHistory((hist) => [
                ...hist,
                `cd: no such file or directory: ${args[0]}`,
              ]);
            } else {
              if (typeof currentFolder[args[0]] === "string") {
                setHistory((hist) => [
                  ...hist,
                  `cd: not a directory: ${args[0]}`,
                ]);
              } else setCurrentPath((path) => `${path}/${args[0]}`);
            }
          }
          break;
        case "open":
          let currentFile: FileInterface = files;
          currentPath.split("/").forEach((folder, i) => {
            if (i === 0) return;
            currentFile = currentFile[folder] as FileInterface;
          });

          if (!Object.keys(currentFile || {}).includes(args[0])) {
            setHistory((hist) => [
              ...hist,
              `open: no such file or directory: ${args[0]}`,
            ]);
          } else {
            if (typeof currentFile[args[0]] === "object") {
              setHistory((hist) => [
                ...hist,
                `open: ${args[0]}: is a directory`,
              ]);
            } else {
              setHistory((hist) => [...hist, currentFile[args[0]] as string]);
            }
          }
          break;
        case "cat":
          let currentFile2: FileInterface = files;
          currentPath.split("/").forEach((folder, i) => {
            if (i === 0) return;
            currentFile2 = currentFile2[folder] as FileInterface;
          });

          if (!Object.keys(currentFile2 || {}).includes(args[0])) {
            setHistory((hist) => [
              ...hist,
              `cat: no such file or directory: ${args[0]}`,
            ]);
          } else {
            if (typeof currentFile2[args[0]] === "object") {
              setHistory((hist) => [
                ...hist,
                `cat: ${args[0]}: is a directory`,
              ]);
            } else {
              setHistory((hist) => [...hist, currentFile2[args[0]] as string]);
            }
          }
          break;
        case "pwd":
          setHistory((hist) => [...hist, currentPath]);
          break;
        case "clear":
          setHistory([]);
          break;
        case "help":
          setHistory((hist) => [...hist, ...helpLines]);
          break;
        case "man":
          setHistory((hist) => [...hist, ...helpLines]);
          break;
      }
    },
    [currentPath]
  );

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        // TODO: Execute command
        const newLine = `${prefix} ${input}`;
        setHistory((hist) => [...hist, newLine]);
        handleCommand(input);
        setInput("");
        scrollToBottom();
      } else if (e.key === "Tab") {
        // TODO: Autocomplete
      } else if (e.key === "Backspace") {
        setInput((inp) => inp.slice(0, inp.length - 1));
      } else if (e.key === "Space") {
        setInput((inp) => inp + "\u0020");
      } else if (e.key.length === 1) {
        setInput((inp) => inp + e.key);
        scrollToBottom();
      }
    },
    [prefix, input, handleCommand]
  );

  function scrollToBottom() {
    const terminal = document.querySelector(`.${styles.terminal_container}`);
    if (terminal) {
      setTimeout(() => {
        terminal.scrollTop = terminal.scrollHeight;
      }, 100);
    } else {
      console.log("terminal not found");
    }
  }

  useEffect(() => {
    if (onTop) {
      window.addEventListener("keydown", handleKeyDown);
    } else {
      window.removeEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onTop, handleKeyDown]);

  return (
    <div className={`${styles.terminal_container} ${firaCode.className}`}>
      {/* Welcome line */}
      <div className={styles.line}>
        Last edit: Fri Apr 28 12:37:31 on{" "}
        <a
          href="https://github.com/andre-fong/andre-portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.github}
        >
          GitHub
        </a>
      </div>

      {/* History */}
      {history.map((line, i) => (
        <div key={i} className={styles.line}>
          {line}
        </div>
      ))}

      {/* Current line */}
      <div className={styles.line}>
        {prefix} {input}
        <span className={styles.text_cursor} />
      </div>
    </div>
  );
}
