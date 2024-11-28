"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = require("../models/product.model");
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield product_model_1.Product.find();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(404).json({ error: "producs not found" });
    }
});
const getProductById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.Product.findById(req.params.id);
        res.status(200).json({ message: "seccessed", product });
    }
    catch (error) {
        res.status(404).json({ error: "producs not found" });
    }
});
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.Product.create(req.body);
        res.status(200).json({ message: "seccessed", product });
    }
    catch (error) {
        res.status(404).json({ error: "producs not found" });
    }
});
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        res.status(200).json({ message: "seccessed", product });
    }
    catch (error) {
        res.status(404).json({ error: "producs not found" });
    }
});
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = yield product_model_1.Product.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "deleted" });
    }
    catch (error) {
        res.status(404).json({ error: "producs not found" });
    }
});
exports.default = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
