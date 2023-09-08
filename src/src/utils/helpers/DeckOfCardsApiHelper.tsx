import axios, { AxiosInstance, AxiosResponse } from "axios";
import {
  DeckResponse,
  DrawResponse,
  ShuffleDeckResponse,
} from "src/types/Response";
class DeckOfCardsApiHelper {
  private apiInstance: AxiosInstance;
  private deckId: string | null = null;

  constructor() {
    this.apiInstance = axios.create({
      baseURL: "https://deckofcardsapi.com/api/deck",
    });
  }

  // Method to create a new deck and shuffle it
  async createNewDeck(): Promise<DeckResponse> {
    try {
      const response: AxiosResponse<DeckResponse> = await this.apiInstance.get(
        "/new/shuffle/?deck_count=1",
      );
      const { deck_id } = response.data;
      if (deck_id) {
        this.deckId = deck_id;
      }
      return response.data;
    } catch (error) {
      // Handle error
      console.error("Error creating a new deck:", error);
      throw error;
    }
  }

  // Method to draw a specified number of cards from the deck
  async drawACard(count: number, deckId?: string): Promise<DrawResponse> {
    if (!deckId && !this.deckId) {
      throw new Error(
        "Deck ID is missing. Please provide a deck ID or create a new deck.",
      );
    }

    try {
      const response: AxiosResponse<DrawResponse> = await this.apiInstance.get(
        `/${deckId || this.deckId}/draw/?count=${count}`,
      );
      return response.data;
    } catch (error) {
      // Handle error
      console.error("Error drawing cards:", error);
      throw error;
    }
  }

  // Method to reshuffle the cards in the deck
  async reshuffleTheCards(
    deckId?: string,
    remaining = true,
  ): Promise<ShuffleDeckResponse> {
    if (!deckId && !this.deckId) {
      throw new Error(
        "Deck ID is missing. Please provide a deck ID or create a new deck.",
      );
    }
    try {
      const response: AxiosResponse<ShuffleDeckResponse> =
        await this.apiInstance.get(
          `/${deckId || this.deckId}/shuffle/?remaining=${remaining}`,
        );
      return response.data;
    } catch (error) {
      // Handle error
      console.error("Error reshuffling cards:", error);
      throw error;
    }
  }

  // Method to return cards to the deck
  async returnCardsToTheDeck(deckId?: string): Promise<DeckResponse> {
    if (!deckId && !this.deckId) {
      throw new Error(
        "Deck ID is missing. Please provide a deck ID or create a new deck.",
      );
    }

    try {
      const response: AxiosResponse<DeckResponse> = await this.apiInstance.get(
        `/${deckId || this.deckId}/return/`,
      );
      return response.data;
    } catch (error) {
      // Handle error
      console.error("Error returning cards to the deck:", error);
      throw error;
    }
  }

  // Additional methods can be added for specific game logic
}

export default new DeckOfCardsApiHelper();
