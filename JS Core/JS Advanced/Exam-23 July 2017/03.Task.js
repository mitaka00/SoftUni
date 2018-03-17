class Task {
    constructor(title, deadline) {
        this.title = title;
        this.deadline = deadline;
        this.status = 'Open';
    }

    get deadline() {
        return this._deadline;
    }

    set deadline(value) {
        if (value < Date.now()) {
            throw new Error("Deadline cannot be in the past");
        }
        this._deadline = value;
    }

    get isOverdue() {
        if (this.status === 'Complete') return false;
        return this.deadline < Date.now();
    }

    static comparator(a, b) {
        if (Task.statusRank === undefined) {
            Object.defineProperty(Task, 'statusRank', {
                value: {
                    'Open': 2,
                    'In Progress': 1,
                    'Complete': 3
                },
                configurable: false,
                enumerable: false,
                writable: false
            });
        }
        let rankA = a.isOverdue ? 0 : Task.statusRank[a.status];
        let rankB = b.isOverdue ? 0 : Task.statusRank[b.status];
        if (rankA - rankB !== 0) {
            return rankA - rankB;
        }
        return a.deadline - b.deadline;
    }

    toString() {
        let icon = '\u2731';
        if (this.status === 'Complete') {
            icon = '\u2714';
        } else if (this.isOverdue) {
            icon = '\u26A0';
        } else if (this.status === 'In Progress') {
            icon = '\u219D';
        }
        return `[${icon}] ${this.title}` + (this.status !== 'Complete' ? (this.isOverdue ? ' (overdue)' : ` (deadline: ${this.deadline})`) : '');
    }
}