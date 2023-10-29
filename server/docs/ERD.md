# ERD: piscord

We'll use a basic client/server architecture, where a single server is deployed
on a cloud provider next to a relational database, and serving HTTP traffic from
a public endpoint.

## Storage

We'll need the following entities:

**Users**:
| Column | Type |
|--------|------|
| ID | STRING/UUID |
| nickname | STRING |
| Password | STRING |
| Email | STRING |
| Username | STRING |

**Servers**:
| Column | Type |
|---------|------|
| ID | STRING/UUID |
| name | STRING |
| ownerID | STRING |
| createdAt | Timestamp |

**ServersMembers**:
| Column | Type |
|---------|------|
| serverID | STRING |
| userID | STRING |

**Categories**:
| Column | Type |
|---------|------|
| ID | STRING/UUID |
| serverID | STRING |
| name | STRING |
| createdAt | Timestamp |

**Channels**:
| Column | Type |
|---------|------|
| channelID | STRING |
| serverID | STRING |
| categoryID | STRING |
| name | STRING |
| createdAt | Timestamp |

**Messages**:
| Column | Type |
|---------|------|
| ID | STRING/UUID |
| channelID | STRING |
| userID | STRING |
| content | STRING |
| createdAt | Timestamp |
| repliedMessageId | STRING |

## API

**Auth**:

```
/auth/signIn  [POST]
/auth/signUp  [POST]
```

**server**:

- any authinticated user can create a server.
- only server owner can delete the server.
- only server owner can edit the server.
- only server members can get the server data (including channels and categories).
- only server owner can add members to the server.

```
/server  [POST]
/server/:id  [DELETE]
/server/:id  [PUT]
/server/:id  [GET]
/server/:userId [POST]
```

**category**:

- only server admin can create a category.
- only server admin can delete a category.
- only server admin can edit a category.
- only server members can get server categories.

```
/category/                  [POST]
/category/:serverId         [DELETE]
/category/:serverId         [PUT]
/category/:serverId/list    [GET]
```

**channel**:

- only server admin can create a channel.
- only server admin can delete a channel.
- only server admin can edit a channel.
- only server members can get channel data.

```
/channel/            [POST]
/channel/:channelId  [DELETE]
/channel/:channelId  [PUT]
/channel/:channelId  [GET]
```

**message**:

```
/message/                     [POST]
/message/:messageId           [DELETE]
/message/:messageId           [PUT]
/message/:channelId           [GET]
```


<!-- endpoint for server (categories and channels nested) -->
<!-- endpoint for a channel chat -->