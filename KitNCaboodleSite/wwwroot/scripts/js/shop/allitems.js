/*<![CDATA[*/
(function () {
    var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
            ShopifyBuyInit();
        } else {
            loadScript();
        }
    } else {
        loadScript();
    }
    function loadScript() {
        var script = document.createElement('script');
        script.async = true;
        script.src = scriptURL;
        (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
        script.onload = ShopifyBuyInit;
    }
    function ShopifyBuyInit() {
        var client = ShopifyBuy.buildClient({
            domain: 'kc-thrift-store.myshopify.com',
            storefrontAccessToken: 'd0121f0945b50c772a53e17688ff4382',
        });
        ShopifyBuy.UI.onReady(client).then(function (ui) {
            ui.createComponent('collection', {
                id: '368096772316',
                node: document.getElementById('collection-component-1635711717885'),
                moneyFormat: '%24%7B%7Bamount%7D%7D',
                options: {
                    "product": {
                        "events": {
                            beforeInit: function (product) {
                                Object.defineProperty(product, "isButton", {
                                    get: function () {
                                        return true;
                                    }
                                });
                                Object.defineProperty(product, "options", {
                                    get: function () {
                                        return this.config[this.typeKey];
                                    }
                                });
                                var actualOnButtonClick = product.onButtonClick;
                                product.onButtonClick = function (event, target) {
                                    event.stopImmediatePropagation();
                                    this.options.buttonDestination = "modal";
                                    actualOnButtonClick.call(this, event, target);
                                };
                            }
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "calc(25% - 20px)",
                                    "margin-left": "20px",
                                    "margin-bottom": "50px",
                                    "width": "calc(25% - 20px)"
                                },
                                "img": {
                                    "height": "calc(100% - 15px)",
                                    "position": "absolute",
                                    "left": "0",
                                    "right": "0",
                                    "top": "0"
                                },
                                "imgWrapper": {
                                    "padding-top": "calc(75% + 15px)",
                                    "position": "relative",
                                    "height": "0",
                                    "transition": "0.2s",
                                    ":hover": {
                                        "transition": "0.4s",
                                        "transform": "scale(1.05)"
                                    },
                                },
                                "description": {
                                    "transform": "translateY(0px)",
                                    "color": "rgba(0, 0, 0, 1)",
                                }
                            }
                        },
                        "buttonDestination": "modal",
                        "contents": {
                            "options": false,
                            "button": false,
                            "description": false
                        },
                        "text": {
                            "button": "View Product"
                        }
                    },
                    "productSet": {
                        "styles": {
                            "products": {
                                "@media (min-width: 601px)": {
                                    "margin-left": "-20px"
                                }
                            }
                        }
                    },
                    "modalProduct": {
                        "contents": {
                            "img": true,
                            "imgWithCarousel": false,
                            "button": true,
                            "buttonWithQuantity": false
                        },
                        "styles": {
                            "product": {
                                "@media (min-width: 601px)": {
                                    "max-width": "100%",
                                    "margin-left": "0px",
                                    "margin-bottom": "0px"
                                }
                            }
                        },
                        "text": {
                            "button": "Add to cart"
                        }
                    },
                    "option": {},
                    "cart": {
                        "text": {
                            "total": "Subtotal",
                            "button": "Checkout"
                        }
                    },
                    "toggle": {}
                },
            });
        });
    }
})();
                    /*]]>*/