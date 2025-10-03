import { EventMap } from "../types/types";

class EventEmitter<Events extends { [K in keyof Events]: unknown }> {
  private events: {
    [K in keyof Events]?: Array<(data: Events[K]) => void>;
  } = {};

  emit<K extends keyof Events>(eventName: K, data: Events[K]): void {
    this.events[eventName]?.forEach((fn) => fn(data));
  }

  subscribe<K extends keyof Events>(
    eventName: K,
    fn: (data: Events[K]) => void
  ): () => void {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName]!.push(fn);
    return () => {
      this.events[eventName] = this.events[eventName]!.filter(
        (cb) => cb !== fn
      );
    };
  }
}

export const emitter = new EventEmitter<EventMap>();
