GraphQL Schema

+--+

User

userId: string (uuid)
name: string
password: string (hashed & salted)
createdAt: dateTime

+--+

Folder (Notes)

folderId: string (uuid)
name: string
createdAt: dateTime
createdBy: string (uuid, reference -> userId)

Notes

noteId: string (uuid)
title: string
body: string
createdAt: dateTime
createdBy: string (uuid, reference)
folderId: string (uuid, reference -> folderId)

+--+