const express = require('express')
const mongoose = require('..\\db')
const bcryptjs = require('bcryptjs')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    saveAt: {
        type: Date,
        default: Date.now
    }
})

UserSchema.pre('save', async (next) => {
    const crypt = await bcryptjs.hash(this.password, 10)
    this.password = crypt
    next()
})

const User = mongoose.model('User', UserSchema)

module.exports = User