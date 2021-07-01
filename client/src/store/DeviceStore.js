import {makeAutoObservable} from 'mobx'

export default class DeviceStore {
    constructor() {
        this._types = [
            {id: 1, name: 'Refregirators'},
            {id: 2, name: 'Smartphones'}
        ]
        this._brands = [
            {id: 1, name: "Samsung"},
            {id: 2, name: "Apple"}
        ]

        this._devices = [
            {id: 1, name: "Iphone 12 Pro", price: 25000, rating: 5, img: "https://estore.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-black_1_.jpeg?utm_source=sellaction.net&SAuid=6bfb9105a41f62de99&utm_medium=cpa"},
            {id: 2, name: "Iphone 12 Pro", price: 25000, rating: 5, img: "https://estore.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-black_1_.jpeg?utm_source=sellaction.net&SAuid=6bfb9105a41f62de99&utm_medium=cpa"},
            {id: 3, name: "Iphone 12 Pro", price: 25000, rating: 5, img: "https://estore.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-black_1_.jpeg?utm_source=sellaction.net&SAuid=6bfb9105a41f62de99&utm_medium=cpa"},
            {id: 4, name: "Iphone 12 Pro", price: 25000, rating: 5, img: "https://estore.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-black_1_.jpeg?utm_source=sellaction.net&SAuid=6bfb9105a41f62de99&utm_medium=cpa"},
            {id: 5, name: "Iphone 12 Pro", price: 25000, rating: 5, img: "https://estore.ua/media/catalog/product/cache/8/small_image/295x295/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-12-black_1_.jpeg?utm_source=sellaction.net&SAuid=6bfb9105a41f62de99&utm_medium=cpa"},
        ]

        makeAutoObservable(this)
    }

    setTypes(types) {
        this._types = types
    }

    setBrands(brands) {
        this._brands = brands
    }

    setDevices(devices) {
        this._devices = devices
    }

    get types() {
        return this._types
    }

    get brands() {
        return this._brands
    }

    get devices() {
        return this._devices
    }
}