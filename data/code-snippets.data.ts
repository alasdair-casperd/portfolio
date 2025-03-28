import type { CodeSnippet } from "~/types/code-snippet";

const domingo_snippet = `import SwiftUI

// The overarching view for all sheet-based puzzle modes
// (i.e. for daily, archived and random puzzles)

struct GameView: View {
    
    @StateObject var gameModel: GameModel
    @Namespace var namespace
    
    var body: some View {
        Group {
            switch gameModel.gameState {
            case .welcome:
                WelcomeView(namespace: namespace)
            case .inProgress:
                PuzzleView(namespace: namespace)
            case .complete:
                CompleteView(namespace: namespace)
            }
        }
        .accentColor(DomingoEngine.themeColor)
        .environmentObject(gameModel)
    }
}`;

const trace_snippet = `
import Foundation

protocol Expression {
    var value: (Assignment) -> Double? { get }
    var debugDescription: String { get }
}

protocol Symbol {
    var validator: (String) -> Bool { get }
    var description: String { get }
}

protocol Operator {
    var priority: Int { get }    
}

struct UnaryOperator: Symbol, Operator {
    
    var priority: Int
    var description: String
    
    var validator: (String) -> Bool
    var closure: (Double?) -> (Double?)
}

struct Constant: Symbol, Expression {
    
    var validator: (String) -> Bool
    var description: String
    var numericalValue: Double
    
    var value: (Assignment) -> Double? {
        { _ in return numericalValue }
    }
    
    var debugDescription: String {
        return description
    }        
}

// ...
`;

const a_big_knight_out_snippet = `using UnityEngine;
using System.Collections.Generic;

/// <summary>
/// A portal square that teleports the player to a linked tile.
/// </summary>
public class PortalSquare : Square
{
    public override TileType Type => TileType.Portal;

    /// <summary>
    /// Teleport the player when they land on the tile.
    /// </summary>
    public override void OnPlayerLand()
    {
        // Check links are correctly set up (this should already be the case after level validation)
        if (Links.Count == 0) return;

        // Teleport the knight
        PlayerController.MoveTo(Links[0].Position, AnimationController.MovementType.Teleport);

        // Play the portal sound effect
        AudioManager.Play(AudioManager.SoundEffects.portal);
    }

    // ...
}
`;

const casperd_life_test_snippet = `import { Category } from "@/types/category";
import { ProgressBar } from "./progress-bar";

interface Props {
  category: Category;
  progress?: number;
}

/**
 * A progress bar to display a user's score in a specific category.
 */
export function CategoryProgressBar({ category, progress }: Props) {
  const progress_text = progress ? \`\${Math.round(progress * 100)}%\` : "0%";
  return (
    <div className="flex flex-col md:flex-row">
      <div className="flex flex-row gap-2">
        <div className="text-accent-400 text-2xl">{category.icon}</div>
        <div className="font-semibold md:w-[260px]">{category.name}</div>
      </div>
      <ProgressBar progress={progress ?? 0} className="h-8">
        {progress_text}
      </ProgressBar>
    </div>
  );
}
`;

const tanks_arena_snippet = `// Instantiate a new Arena object from an input Level object
public static void CreateArena(Level level)
{   
    // Create a 'root' gameObject with the Arena component
    GameObject arenaHook = new GameObject(level.levelName);
    Arena arena = arenaHook.AddComponent<Arena>();

    // Create each of the blocks making up the arena's block matrix
    List<List<Block>> blockMatrix = new List<List<Block>>();
    for (int i = 0; i < level.Height; i++)
    {
        List<Block> row = new List<Block>();
        for (int j = 0; j < level.Width; j++)
        {
            // Name the block
            string blockName = "B(" + i.ToString() + "," + j.ToString() + ")";
            
            // ...`;

const portfolio = `import type { Category } from "~/types/category";

export const categories: Record<string, Category> = {
  ios_development: {
    name: "iOS Development",
    description:
      "A collection of iOS apps I've developed, including two published apps (WordOwl and Domingo) and a number of work-in-progress projects.",
    path: "/apps",
  },
  
  // ...`;

const bookmarks_extension = `import * as vscode from "vscode";
import { Bookmark } from "./Bookmark";
import { BookmarkType } from "./BookmarkType";

export class BookmarkProvider implements vscode.TreeDataProvider<Bookmark>, vscode.TreeDragAndDropController<Bookmark>
{
  constructor(private context: vscode.ExtensionContext) {
    this.loadBookmarks();
  }

  /**
   * The current list of bookmarks.
   */
  private bookmarks: Bookmark[] = [];

  /**
   * Get the tree item for a given element.
   * @param element
   * @returns
   */
  getTreeItem = (element: Bookmark): vscode.TreeItem => element;

  /**
   * Get the children of an element in the tree. Non-empty for the root element only.
   * @param element
   * @returns
   */
  getChildren = async (element?: Bookmark): Promise<Bookmark[]> => {
    return element ? [] : this.bookmarks;
  };

  //...
}
`;

export const code_snippets: Record<string, CodeSnippet> = {
  domingo: {
    file_name: "GameView.swift",
    language: "swift",
    link: "https://github.com/alasdair-casperd/domingo",
    code: domingo_snippet,
  },
  trace: {
    file_name: "CoreStructure.swift",
    language: "swift",
    link: "https://github.com/alasdair-casperd/trace",
    code: trace_snippet,
  },
  a_big_knight_out: {
    file_name: "PortalSquare.cs",
    language: "csharp",
    link: "https://github.com/alasdair-casperd/a-big-knight-out",
    code: a_big_knight_out_snippet,
  },
  casperd_life_test: {
    file_name: "category-progress-bar.jsx",
    language: "typescript",
    link: "https://github.com/alasdair-casperd/casperd-life-test",
    code: casperd_life_test_snippet,
  },
  tanks_arena: {
    file_name: "Arena.cs",
    language: "csharp",
    link: "https://github.com/alasdair-casperd/tanks-arena",
    code: tanks_arena_snippet,
  },
  portfolio: {
    file_name: "category.data.ts",
    language: "typescript",
    link: "https://github.com/alasdair-casperd/portfolio",
    code: portfolio,
  },
  bookmarks_extension: {
    file_name: "BookmarkProvider.ts",
    language: "typescript",
    link: "https://github.com/alasdair-casperd/file-bookmarks",
    code: bookmarks_extension,
  },
};
