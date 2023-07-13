class EventEmitter {
  result = [];
  subscribed = [];
  eventItem;
  subscribe(event, cb) {
    this.subscribed = [
      ...this.subscribed,
      { id: this.subscribed.length + 1, event, cb },
    ];

    return {
      unsubscribe: () => {
        this.subscribed = [
          ...this.subscribed.slice(0, 0),
          ...this.subscribed.slice(1),
        ];
        this.result = [...this.result.slice(0, 0), ...this.result.slice(1)];

        return undefined;
      },
    };
  }

  emit(event, args = []) {
    this.eventItem = this.subscribed.filter((o) => o.event === event);

    if (this.eventItem) {
      this.result = [];
      this.eventItem.forEach((item) => {
        this.result.push(item.cb(...args));
      });
    }
    return this.result;
  }
}
