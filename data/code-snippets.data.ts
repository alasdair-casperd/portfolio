import type { CodeSnippet } from "~/types/code-snippet";

export const code_snippets: Record<string, CodeSnippet> = {
  domingo: {
    file_name: "GameView.swift",
    language: "swift",
    link: "https://github.com/alasdair-casperd/domingo",
    code: `import SwiftUI

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
}`,
  },
};
