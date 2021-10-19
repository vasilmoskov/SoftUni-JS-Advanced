class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = new Map();
        this._likes = new Set();
    }

    get likes() {
        if (this._likes.size == 0) {
            return `${this.title} has 0 likes`
        } else if (this._likes.size == 1) {
            return `${this._likes.values().next().value} likes this story!`
        } else {
            return `${this._likes.values().next().value} and ${this._likes.size - 1} others like this story!`;
        }
    }

    like(username) {
        if (this._likes.has(username)) {
            throw new Error("You can't like the same story twice!");
        }

        if (username == this.creator) {
            throw new Error("You can't like your own story!");
        }

        this._likes.add(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.has(username)) {
            throw new Error("You can't dislike this story!");
        }

        this._likes.delete(username);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {
        if (!this._comments.has(id)) {
            let commentId = this._comments.size + 1

            const comment = {
                id: commentId,
                username,
                content,
                replies: new Map()
            }

            this._comments.set(commentId, comment);

            return `${username} commented on ${this.title}`;

        } else {
            let replyId = `${this._comments.get(id).id.toString()}.${(this._comments.get(id).replies.size + 1).toString()}`;

            const reply = {
                id: replyId,
                username,
                content
            }

            this._comments.get(id).replies.set(replyId, reply);
            return "You replied successfully";
        }
    }

    toString(sortingType) {
        const result = [];

        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this._likes.size}`);
        result.push(`Comments:`);

        let replies = [];

        [...this._comments.values()].forEach(c => {
            if (c.replies.size > 0) {
                for (const [key, value] of c.replies) {
                    replies.push(value);
                }
            }
        });

        let sortedComments;
        let sortedReplies;

        // const sortVersion = {
        //     asc: (a, b) => a.Id - b.Id,
        //     desc: (a, b) => b.Id - a.Id,
        //     username: (a, b) => a.Username.localeCompare(b.Username)
        // };

        switch (sortingType) {
            case 'asc':
                // [...this._comments.entries()].sort();
                // replies.sort();
                // sortedComments = Array.from(this._comments.entries()).sort((a, b) => a[1].id - b[1].id);
                sortedComments = Array.from(this._comments.values()).sort((a, b) => a.id - b.id);
                sortedReplies = replies.sort((a, b) => a.id - b.id);
                break;
            case 'desc':
                // [...this._comments.entries()].sort().reverse();
                // replies.sort().reverse();
                // sortedComments = Array.from(this._comments.entries()).sort((a, b) => b[1].id - a[1].id);
                sortedComments = Array.from(this._comments.values()).sort((a, b) => b.id - a.id);
                sortedReplies = replies.sort((a, b) => b.id - a.id);
                break;
            case 'username':
                sortedComments = Array.from(this._comments.values()).sort((a, b) => a.username.localeCompare(b.username));
                sortedReplies = replies.sort((a, b) => a.username.localeCompare(b.username));
                break;
        }

        sortedComments.forEach(c => {
            result.push(`-- ${c.id}. ${c.username}: ${c.content}`);

            let existingReplies = [...c.replies.values()];

            sortedReplies.forEach(r => {
                if (existingReplies.includes(r)) {
                    result.push(`--- ${r.id}. ${r.username}: ${r.content}`)
                }
            });

        });
        // sortedReplies.forEach(r => result.push(`--- ${r.id}. ${r.username}: ${r.content}`))

        return result.join('\n');
    }
}

// let art = new Story("My Story", "Anny");
// art.like("John");
// console.log(art.likes);
// art.dislike("John");
// console.log(art.likes);
// art.comment("Sammy", "Some Content");
// console.log(art.comment("Ammy", "New Content"));
// art.comment("Zane", "Reply", 1);
// art.comment("Jessy", "Nice :)");
// console.log(art.comment("SAmmy", "Reply@", 1));
// console.log()
// console.log(art.toString('username'));
// console.log()
// art.like("Zane");
// console.log(art.toString('desc'));


const Story = result;
let art = new Story("My Story", "Anny");
// assert.equal(art.like("John"), "John liked My Story!");
// assert.equal(art.likes, "John likes this story!");
// assert.throw(()=>art.dislike("Sally"), "You can't dislike this story!");
assert.equal(art.like("Ivan"),"Ivan liked My Story!");
assert.equal(art.like("Steven"), "Steven liked My Story!");
assert.equal(art.likes, "John and 2 others like this story!");
assert.equal(art.comment("Anny", "Some Content"),"Anny commented on My Story");
assert.equal(art.comment("Ammy", "New Content", 1),"You replied successfully");
assert.equal(art.comment("Zane", "Reply", 2),"Zane commented on My Story");
assert.equal(art.comment("Jessy", "Nice :)"), "Jessy commented on My Story");
console.log(art.comment("SAmmy", "Reply@", 2), "You replied successfully");