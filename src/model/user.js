const express = require('express');
const mongoose = require('..\\db');

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
});

const User = mongoose.model('User', UserSchema)

module.exports = User;