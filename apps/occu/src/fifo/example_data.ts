export const example_tx_data = `
[
    {
        "height": "4687299",
        "id": {
            "inner": "IzQpM4OPR1J0kkTzUvlNoxVH61hO6QkRovwkkHz89Ec="
        },
        "transaction": {
            "body": {
                "actions": [
                    {
                        "spend": {
                            "body": {
                                "balanceCommitment": {
                                    "inner": "9C7JtmAPpKOJESMQPgPvYTxVDjJh+/UD4pylTdwl5Qg="
                                },
                                "rk": {
                                    "inner": "LvrPitDhHwWKak/V+uxQrKXs6o1UhnK63EyDY5ojXw8="
                                },
                                "nullifier": {
                                    "inner": "s8aaFox9BCCbBcUfdw4spKKtj/Krwz1ZLlnIuHkUhAA="
                                },
                                "encryptedBackref": "M3SZyI+EId+VGel7t70KkFHsp6ulavTJiBRClMIWD9luKdl520b0E3ulQFzJFusK"
                            },
                            "authSig": {
                                "inner": "atzYpYQmTShgORAv9Sei+3XjXrBS8crssQne1K93qhIdm6YevgiLUtmJHtl63NINFRysYSBYLHLtZEl/BoWKAg=="
                            },
                            "proof": {
                                "inner": "qY7G3KRgKySjwihQL2mweO5H2QApoSxXkejMwNqQx2sHk7fMGlb+c/flKzInQkuBcQ7Ub2qlpUyhCBg7EN1oDvRddMTsY755dK5Eeu1YwyGGaUAyBEDKKA87MCHNQ2kBCzpptvjos9fRxy1rfSCzQZjQz2vItLVgNxYixpKYdrXuQFSglw8NB/VitUgB+ocANi9uedIph44K2UZXYGOBCBI09/FyKyYwntQF1Qm0GG9lYY4fhZSmV8jDNcj3WaaB"
                            }
                        }
                    },
                    {
                        "output": {
                            "body": {
                                "notePayload": {
                                    "noteCommitment": {
                                        "inner": "XOsNak/3ssXrJfpMuE2A6BEXuSxduVAKQa+mY2eQ/Ao="
                                    },
                                    "ephemeralKey": "xgXCC8hfj+oTUq6K2iTbHZ0lJb4DzCTw7shd1qF3IQE=",
                                    "encryptedNote": {
                                        "inner": "knyvOYOmf4PS2u9FvOci0wiADd0WYC7Gi0sweuUkR0M8ljSMP5GBpxZ25kCwFOqPDCx9oHkwCP8Y9TMiMPye7NYFeNQtthM0vM+jCKAc+J/hcZvJCVkneAr55M3FbuH5fqq2DVWG5NLXQcM2CgSUb+4+Ef8eDIN0kpxubINUeRzLvzCEJQH/FUk0oEqb/nssAF8tIA8gQwHQaYRtSIOVR/GQZ+J9Tq15/z9LWIiNJRo="
                                    }
                                },
                                "balanceCommitment": {
                                    "inner": "JmbWQLuT7Kx0sbmdjg/uFhPrxF94qr4K3nvI7XdUYQc="
                                },
                                "wrappedMemoKey": "G5J9Fb1icj3pJRgSwQBcik0RLIDXfOiZJCMbQ0Ll/is2Z7QeM0/Ue1+QQ0jvof7j",
                                "ovkWrappedKey": "jWiiWTDY4hkB0cjVv0rJX+a/JZl1MRuX4qGSY30Tu5aVRIc8w/RTmJAEV2qU/Mjw"
                            },
                            "proof": {
                                "inner": "mUFroEjDakUDDqjTmaG7HKnUCWAP9bmDcQD01q1mZaVM8b4ahQM0v6F6qcrpqcoAEy+OQ9J3GZiYn9XThgQ4bQP0AcneZWtnvrCIoRqs1D02/uS/qPfXPvpqw3WdcU4A5RA6Gnbvf3TpT5qPt1f3gqezsmZGKWKpXDlxjKtpuQKSwKxHcFI7Q21g2cMJiwCANBxUvRrnZRBPK/fBJXzGTJIF8Gy1g092zrITj6y72ayUxgYEIERcF7s6GvBsm7kA"
                            }
                        }
                    },
                    {
                        "undelegateClaim": {
                            "body": {
                                "validatorIdentity": {
                                    "ik": "NAeSi/zd8bsMIoz3yMvVa4vru0OxCxBA/JrY54F0rgc="
                                },
                                "startEpochIndex": "0",
                                "penalty": {
                                    "inner": "AAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAA="
                                },
                                "balanceCommitment": {
                                    "inner": "eLJy/EMWKreTiVzZedaQJZHnyEEevfG+vmu5X6kZwgc="
                                },
                                "unbondingStartHeight": "4422822"
                            },
                            "proof": "CsABvvIBcyLais/zwLsCP3jPuzWkC7VixbzqkJNusaqAQw+ACV/7EWm1nIwMWfAJN0CAtJi/T7jBfzdLOArE8+iU0FA/3zVhG1SlZjKQDmNit/0Fk8+opm2DDUW+E5XgHyYB5LUrm0tzuxDkPGaZ5+0T4QimTVd/vwu+R+d0bFOFlgYsGk52Oqem7NIFaEorR7YAUEsnIgAv0Sz16aAEYRtueN8dbQCwzSZH1Wt3UfJuoi9gBv7PsjwopUQfRdafwKcB"
                        }
                    }
                ],
                "transactionParameters": {
                    "expiryHeight": "0",
                    "chainId": "penumbra-1",
                    "fee": {
                        "amount": {
                            "lo": "526",
                            "hi": "0"
                        }
                    }
                },
                "detectionData": {
                    "fmdClues": [
                        {
                            "inner": "2qCkD97O+FSb0vPxMjdCBQdu7mKsHOAQiwgCiUQo6QgQvOn+GMbmEYhL/tR+UGy92OrF7CLEJ55/PK+PfT1HAQAAAAA="
                        }
                    ]
                },
                "memo": {
                    "inner": "yxt0hoOGxkGteGpb2iKVd1xeZQJr5nc+uOCSnthmYB+E+al9oQw0PoNgTI+4nQ7zkXHZT2DNQP6ymKsJsLydarwN8e6gm0oH77K7iUO+e/zKfnRsMrw7JVg/uBPV25OrsYFFLb7XHXkvvmPWHIMdIh+aqhChUHZ8k/A+0sLjyLGZZ6iIWK8AdhIA8FgXO56l5Oo21qqZNhOV3+VQSORG1zCK2tE4Tij0HAn4TAx8Aa7Kpdyphb6wQb7XdYp/ivOkjOcyqQv+96VNioPAc4GRBtkJoOrgaTCZvWUbPnJV1815oYtcgdwEHbNP8hRFURDLZYUScZXkAD/0Fm1D40KPJ3ojJWoJv4YOLk7Hs2U9RJCIWo+1jRqkms3IB/zHBs6i6zyRrd4ipZKhQjjPZsNfJqDSwb2VjKLbOwGRWei9oJvfFKvFvH2Yap4KEWg0zOX4MVZp+0tBQWBcxlDvjCKeLT4ULfrMQoglF8F0UbWX1Pz7TdCbTR/TIHfuH7GrMKOKy+kTSnO8HZHSkQwOgsctKwf+tYk70Qp0Ihm5my1x0ioYEPBRfcPe72N1wkOLPldo5bIFCaRAb/B3HdNqliymKMv5F2xqRalt+dk0p9Xm/8c7v5PJC2AQWBdUlAspap6BW1vuZ/BMXBQmHaYnqGN3JCBuq2lcxenGUurY9eif00jMIfTz3ZZxX4WhsyGoRony"
                }
            },
            "bindingSig": {
                "inner": "0L7UM1URaGeJ1EeGsKQRhMPL/XZxYzHhNpjG0etEOBKa52kO2ffo+j2YE9IHo03GuyN/U8VO8RAkoNZ1BLbSAw=="
            },
            "anchor": {
                "inner": "Nht3FYu8wSPCHM5I4NuXJaLoFSzJd3qiHOQqYmpGLwQ="
            }
        },
        "perspective": {
            "payloadKeys": [
                {
                    "payloadKey": {
                        "inner": "DQ+Dv/TG0TkpK7xQbnW99p2P4vzRzL3UdA01gh9x/Yc="
                    },
                    "commitment": {
                        "inner": "XOsNak/3ssXrJfpMuE2A6BEXuSxduVAKQa+mY2eQ/Ao="
                    }
                }
            ],
            "spendNullifiers": [
                {
                    "nullifier": {
                        "inner": "s8aaFox9BCCbBcUfdw4spKKtj/Krwz1ZLlnIuHkUhAA="
                    },
                    "note": {
                        "value": {
                            "amount": {
                                "lo": "28606205",
                                "hi": "0"
                            },
                            "assetId": {
                                "inner": "gSpLoUkuIcAAzwcA24ymgAGreRZCbZ9bUk0Yl352oAE=",
                                "altBech32m": "",
                                "altBaseDenom": ""
                            }
                        },
                        "rseed": "8cTg9P4X9T3hLZ8PiG1loCmbuiu0cHRs6jMHAJZKLDU=",
                        "address": {
                            "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                            "altBech32m": ""
                        }
                    }
                }
            ],
            "adviceNotes": [],
            "addressViews": [
                {
                    "decoded": {
                        "address": {
                            "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                            "altBech32m": ""
                        },
                        "index": {
                            "account": 0,
                            "randomizer": ""
                        },
                        "walletId": {
                            "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                        }
                    }
                }
            ],
            "denoms": [
                {
                    "description": "",
                    "denomUnits": [
                        {
                            "denom": "unbonding_start_at_4422822_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                            "exponent": 6,
                            "aliases": []
                        },
                        {
                            "denom": "munbonding_start_at_4422822_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                            "exponent": 3,
                            "aliases": []
                        },
                        {
                            "denom": "uunbonding_start_at_4422822_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                            "exponent": 0,
                            "aliases": []
                        }
                    ],
                    "base": "uunbonding_start_at_4422822_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                    "display": "unbonding_start_at_4422822_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                    "name": "",
                    "symbol": "unbondUMat4422822(xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa)",
                    "penumbraAssetId": {
                        "inner": "gSpLoUkuIcAAzwcA24ymgAGreRZCbZ9bUk0Yl352oAE=",
                        "altBech32m": "",
                        "altBaseDenom": ""
                    },
                    "images": [],
                    "priorityScore": "0",
                    "badges": [],
                    "coingeckoId": ""
                },
                {
                    "description": "The native token of Penumbra",
                    "denomUnits": [
                        {
                            "denom": "penumbra",
                            "exponent": 6,
                            "aliases": []
                        },
                        {
                            "denom": "mpenumbra",
                            "exponent": 3,
                            "aliases": []
                        },
                        {
                            "denom": "upenumbra",
                            "exponent": 0,
                            "aliases": []
                        }
                    ],
                    "base": "upenumbra",
                    "display": "penumbra",
                    "name": "Penumbra",
                    "symbol": "UM",
                    "penumbraAssetId": {
                        "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                        "altBech32m": "",
                        "altBaseDenom": ""
                    },
                    "images": [
                        {
                            "png": "",
                            "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                            "theme": {
                                "primaryColorHex": "#c9a975",
                                "circle": false,
                                "darkMode": false
                            }
                        }
                    ],
                    "priorityScore": "999999999999",
                    "badges": [],
                    "coingeckoId": "penumbra"
                }
            ],
            "transactionId": {
                "inner": "IzQpM4OPR1J0kkTzUvlNoxVH61hO6QkRovwkkHz89Ec="
            },
            "prices": [],
            "extendedMetadata": [],
            "creationTransactionIdsByNullifier": [],
            "nullificationTransactionIdsByCommitment": [],
            "batchSwapOutputData": []
        },
        "view": {
            "bodyView": {
                "actionViews": [
                    {
                        "spend": {
                            "visible": {
                                "spend": {
                                    "body": {
                                        "balanceCommitment": {
                                            "inner": "9C7JtmAPpKOJESMQPgPvYTxVDjJh+/UD4pylTdwl5Qg="
                                        },
                                        "rk": {
                                            "inner": "LvrPitDhHwWKak/V+uxQrKXs6o1UhnK63EyDY5ojXw8="
                                        },
                                        "nullifier": {
                                            "inner": "s8aaFox9BCCbBcUfdw4spKKtj/Krwz1ZLlnIuHkUhAA="
                                        },
                                        "encryptedBackref": "M3SZyI+EId+VGel7t70KkFHsp6ulavTJiBRClMIWD9luKdl520b0E3ulQFzJFusK"
                                    },
                                    "authSig": {
                                        "inner": "atzYpYQmTShgORAv9Sei+3XjXrBS8crssQne1K93qhIdm6YevgiLUtmJHtl63NINFRysYSBYLHLtZEl/BoWKAg=="
                                    },
                                    "proof": {
                                        "inner": "qY7G3KRgKySjwihQL2mweO5H2QApoSxXkejMwNqQx2sHk7fMGlb+c/flKzInQkuBcQ7Ub2qlpUyhCBg7EN1oDvRddMTsY755dK5Eeu1YwyGGaUAyBEDKKA87MCHNQ2kBCzpptvjos9fRxy1rfSCzQZjQz2vItLVgNxYixpKYdrXuQFSglw8NB/VitUgB+ocANi9uedIph44K2UZXYGOBCBI09/FyKyYwntQF1Qm0GG9lYY4fhZSmV8jDNcj3WaaB"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "28606205",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "",
                                                "denomUnits": [
                                                    {
                                                        "denom": "unbonding_start_at_4422822_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "munbonding_start_at_4422822_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "uunbonding_start_at_4422822_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "uunbonding_start_at_4422822_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                "display": "unbonding_start_at_4422822_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                "name": "",
                                                "symbol": "unbondUMat4422822(xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa)",
                                                "penumbraAssetId": {
                                                    "inner": "gSpLoUkuIcAAzwcA24ymgAGreRZCbZ9bUk0Yl352oAE=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [],
                                                "priorityScore": "0",
                                                "badges": [],
                                                "coingeckoId": ""
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "8cTg9P4X9T3hLZ8PiG1loCmbuiu0cHRs6jMHAJZKLDU=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    {
                        "output": {
                            "visible": {
                                "output": {
                                    "body": {
                                        "notePayload": {
                                            "noteCommitment": {
                                                "inner": "XOsNak/3ssXrJfpMuE2A6BEXuSxduVAKQa+mY2eQ/Ao="
                                            },
                                            "ephemeralKey": "xgXCC8hfj+oTUq6K2iTbHZ0lJb4DzCTw7shd1qF3IQE=",
                                            "encryptedNote": {
                                                "inner": "knyvOYOmf4PS2u9FvOci0wiADd0WYC7Gi0sweuUkR0M8ljSMP5GBpxZ25kCwFOqPDCx9oHkwCP8Y9TMiMPye7NYFeNQtthM0vM+jCKAc+J/hcZvJCVkneAr55M3FbuH5fqq2DVWG5NLXQcM2CgSUb+4+Ef8eDIN0kpxubINUeRzLvzCEJQH/FUk0oEqb/nssAF8tIA8gQwHQaYRtSIOVR/GQZ+J9Tq15/z9LWIiNJRo="
                                            }
                                        },
                                        "balanceCommitment": {
                                            "inner": "JmbWQLuT7Kx0sbmdjg/uFhPrxF94qr4K3nvI7XdUYQc="
                                        },
                                        "wrappedMemoKey": "G5J9Fb1icj3pJRgSwQBcik0RLIDXfOiZJCMbQ0Ll/is2Z7QeM0/Ue1+QQ0jvof7j",
                                        "ovkWrappedKey": "jWiiWTDY4hkB0cjVv0rJX+a/JZl1MRuX4qGSY30Tu5aVRIc8w/RTmJAEV2qU/Mjw"
                                    },
                                    "proof": {
                                        "inner": "mUFroEjDakUDDqjTmaG7HKnUCWAP9bmDcQD01q1mZaVM8b4ahQM0v6F6qcrpqcoAEy+OQ9J3GZiYn9XThgQ4bQP0AcneZWtnvrCIoRqs1D02/uS/qPfXPvpqw3WdcU4A5RA6Gnbvf3TpT5qPt1f3gqezsmZGKWKpXDlxjKtpuQKSwKxHcFI7Q21g2cMJiwCANBxUvRrnZRBPK/fBJXzGTJIF8Gy1g092zrITj6y72ayUxgYEIERcF7s6GvBsm7kA"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "28605679",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "The native token of Penumbra",
                                                "denomUnits": [
                                                    {
                                                        "denom": "penumbra",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "mpenumbra",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "upenumbra",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "upenumbra",
                                                "display": "penumbra",
                                                "name": "Penumbra",
                                                "symbol": "UM",
                                                "penumbraAssetId": {
                                                    "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "",
                                                        "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#c9a975",
                                                            "circle": false,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "999999999999",
                                                "badges": [],
                                                "coingeckoId": "penumbra"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "ggoYeMEUhxoG6EpZNbjnFoZj+fLPqiaztS+uH5fb1tg=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                },
                                "payloadKey": {
                                    "inner": "os45uz8Fdhbf4ZnYTWhEb7k3VdMH5cmoXElYo/cdFGM="
                                }
                            }
                        }
                    },
                    {
                        "undelegateClaim": {
                            "body": {
                                "validatorIdentity": {
                                    "ik": "NAeSi/zd8bsMIoz3yMvVa4vru0OxCxBA/JrY54F0rgc="
                                },
                                "startEpochIndex": "0",
                                "penalty": {
                                    "inner": "AAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAA="
                                },
                                "balanceCommitment": {
                                    "inner": "eLJy/EMWKreTiVzZedaQJZHnyEEevfG+vmu5X6kZwgc="
                                },
                                "unbondingStartHeight": "4422822"
                            },
                            "proof": "CsABvvIBcyLais/zwLsCP3jPuzWkC7VixbzqkJNusaqAQw+ACV/7EWm1nIwMWfAJN0CAtJi/T7jBfzdLOArE8+iU0FA/3zVhG1SlZjKQDmNit/0Fk8+opm2DDUW+E5XgHyYB5LUrm0tzuxDkPGaZ5+0T4QimTVd/vwu+R+d0bFOFlgYsGk52Oqem7NIFaEorR7YAUEsnIgAv0Sz16aAEYRtueN8dbQCwzSZH1Wt3UfJuoi9gBv7PsjwopUQfRdafwKcB"
                        }
                    }
                ],
                "transactionParameters": {
                    "expiryHeight": "0",
                    "chainId": "penumbra-1",
                    "fee": {
                        "amount": {
                            "lo": "526",
                            "hi": "0"
                        }
                    }
                },
                "detectionData": {
                    "fmdClues": [
                        {
                            "inner": "2qCkD97O+FSb0vPxMjdCBQdu7mKsHOAQiwgCiUQo6QgQvOn+GMbmEYhL/tR+UGy92OrF7CLEJ55/PK+PfT1HAQAAAAA="
                        }
                    ]
                },
                "memoView": {
                    "visible": {
                        "ciphertext": {
                            "inner": "yxt0hoOGxkGteGpb2iKVd1xeZQJr5nc+uOCSnthmYB+E+al9oQw0PoNgTI+4nQ7zkXHZT2DNQP6ymKsJsLydarwN8e6gm0oH77K7iUO+e/zKfnRsMrw7JVg/uBPV25OrsYFFLb7XHXkvvmPWHIMdIh+aqhChUHZ8k/A+0sLjyLGZZ6iIWK8AdhIA8FgXO56l5Oo21qqZNhOV3+VQSORG1zCK2tE4Tij0HAn4TAx8Aa7Kpdyphb6wQb7XdYp/ivOkjOcyqQv+96VNioPAc4GRBtkJoOrgaTCZvWUbPnJV1815oYtcgdwEHbNP8hRFURDLZYUScZXkAD/0Fm1D40KPJ3ojJWoJv4YOLk7Hs2U9RJCIWo+1jRqkms3IB/zHBs6i6zyRrd4ipZKhQjjPZsNfJqDSwb2VjKLbOwGRWei9oJvfFKvFvH2Yap4KEWg0zOX4MVZp+0tBQWBcxlDvjCKeLT4ULfrMQoglF8F0UbWX1Pz7TdCbTR/TIHfuH7GrMKOKy+kTSnO8HZHSkQwOgsctKwf+tYk70Qp0Ihm5my1x0ioYEPBRfcPe72N1wkOLPldo5bIFCaRAb/B3HdNqliymKMv5F2xqRalt+dk0p9Xm/8c7v5PJC2AQWBdUlAspap6BW1vuZ/BMXBQmHaYnqGN3JCBuq2lcxenGUurY9eif00jMIfTz3ZZxX4WhsyGoRony"
                        },
                        "plaintext": {
                            "returnAddress": {
                                "decoded": {
                                    "address": {
                                        "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                        "altBech32m": ""
                                    },
                                    "index": {
                                        "account": 0,
                                        "randomizer": ""
                                    },
                                    "walletId": {
                                        "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                    }
                                }
                            },
                            "text": ""
                        }
                    }
                }
            },
            "bindingSig": {
                "inner": "0L7UM1URaGeJ1EeGsKQRhMPL/XZxYzHhNpjG0etEOBKa52kO2ffo+j2YE9IHo03GuyN/U8VO8RAkoNZ1BLbSAw=="
            },
            "anchor": {
                "inner": "Nht3FYu8wSPCHM5I4NuXJaLoFSzJd3qiHOQqYmpGLwQ="
            }
        },
        "summary": {
            "effects": [
                {
                    "address": {
                        "opaque": {
                            "address": {
                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                "altBech32m": ""
                            }
                        }
                    },
                    "balance": {
                        "values": [
                            {
                                "value": {
                                    "amount": {
                                        "lo": "28606205",
                                        "hi": "0"
                                    },
                                    "assetId": {
                                        "inner": "gSpLoUkuIcAAzwcA24ymgAGreRZCbZ9bUk0Yl352oAE=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    }
                                },
                                "negated": false
                            },
                            {
                                "value": {
                                    "amount": {
                                        "lo": "28605679",
                                        "hi": "0"
                                    },
                                    "assetId": {
                                        "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    }
                                },
                                "negated": true
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        "height": "4451927",
        "id": {
            "inner": "qBXeSMn9j7UD7l2oIrOFGoUS3Ol81Xo8238JCD/3RMI="
        },
        "transaction": {
            "body": {
                "actions": [
                    {
                        "spend": {
                            "body": {
                                "balanceCommitment": {
                                    "inner": "uGA+DPDZ5BGuevlVmdIddv1aZ1YryU6KnwYjyt6srRE="
                                },
                                "rk": {
                                    "inner": "fg319WkiKb/Rdq9N6oA6wg9j4+IiWlibtSCoxTWg9As="
                                },
                                "nullifier": {
                                    "inner": "BeraS8jfThADBEaz8wJq6V1N8wYP2uMznMJWQgXmuwk="
                                },
                                "encryptedBackref": "pEthJ4T0OzlfYuzCjsLkHMshRDwSNwSL/RI44qHHnzMpwttq2j1A2kZ8NcAl8BlE"
                            },
                            "authSig": {
                                "inner": "hC6/bH2aBEppKMyhECGIsK5aVqAnu9qZbE4cYhYLUQlpLl723MGJ0aV8BBee/VUdH2+rCgzE8qgmBlGOgI8VAw=="
                            },
                            "proof": {
                                "inner": "87nTurZgLOJ4MyxC0tUO+LuRt4tCuTQgCNtcEE3Fg2sPpHNl3b1Zy4aq0XZ+oIgAc+1GwNieq7QvP3+kSThx399GiS5miw3VCQG7GKFaacNlNtMpPB+NT59r5zN6VgUBxKpJpQL4ED1XF7oZpK/zmyvwGvrMmCDY/1LgLZ0ZLei6q91vHNnBRjMLDTzrN3uAScX8NsHIeqJpLKQC2apKbw7aWCXJm/IUwlYlbFFGBKfB293WQ+ryIGljaRFtoqYA"
                            }
                        }
                    },
                    {
                        "output": {
                            "body": {
                                "notePayload": {
                                    "noteCommitment": {
                                        "inner": "pazd7b2PPMV/XN6yfARUjIQ7p7uxyKXdiBuXpzIM3gQ="
                                    },
                                    "ephemeralKey": "OrQWuvr6SVsc7cIeHlzORuWthtOVO9npfxw4vMyJ3ws=",
                                    "encryptedNote": {
                                        "inner": "oiEbIlBLvSHRVW0ZvF1tem5NaRWELj4zrnP3b9AenUyF9o5xE+eqBuj/gc1i/0RZRQ8OV9+JcCx4mgl/euegunztAZ8UOrPOEOP86sJah6KtcZYhDsI0KdTDjUTD0OOkJgi/aV9ZEab5QR0yxnvKTVBMYJRr+OaxObJQBRvDBQAO2ImicwJBi3NBDPyraNVF1XdEIHOgWXl/Gmbop+q5Y+hsQ7dz+vXWl50i6qhHwEM="
                                    }
                                },
                                "balanceCommitment": {
                                    "inner": "JgGtZdqVX/oNkdCJXy5WdwtGpVo9Hvrtg0Gnci+gIAY="
                                },
                                "wrappedMemoKey": "ehCjOsQTJj1ZepAw5K8+GB6DCq173akklbqeboCNol/x2zqFZTbngKtmOGukpzBW",
                                "ovkWrappedKey": "hzEDxYfWRj/bHswxICmg/ZD+zzkJqxmBolOS2Ik6SsmDM9jc3qTQ+3tKA/8aQHUG"
                            },
                            "proof": {
                                "inner": "aI/kYiSz7rVdqoQd2ooCdzHFlWYQrVG2KR9788vbpAxNTsMxrEJa9Jzyzr8Xk3eBy2YJSaTTIOB1XN3Y+/oHrq/3QCdFmcOQ2DpKLAOfkEcHSo+oafdYouEHYpPwADoBssBUl0mvAiMReMFRt5+x/ZJyh9s1WwJeSiQYUONF4Wu0Wc5ehG2MrclTvDd7ZVsAMac+NJK3T5DYVwNv03WinIKHNIphhrBezh7DymlxprszG3Dqfuyh7RRhqEofvIiB"
                            }
                        }
                    },
                    {
                        "output": {
                            "body": {
                                "notePayload": {
                                    "noteCommitment": {
                                        "inner": "hSuEnjCkY4NNOXs0h5D0+rxoA+QX1lJohPJP2tKlehI="
                                    },
                                    "ephemeralKey": "ZEfh0Ir1su6ysOFGUM0QQUUYFZ5i+xiob3J7XrS33gg=",
                                    "encryptedNote": {
                                        "inner": "jmlX1b+j1s635mWL93RCwN+Nft9M60+PLrrwZ9pv5n84Mv1Giu42Uy3QMFmcgqLOiq9RJ5zIm5Olcg5Ae3b/vgypOWKyEyiHFmAVg+zMGi1SySiXqueuPAkbxveMDIU/AZu975B+v8ch6R1S3iw606jVrfDs8VRDqta7QiZ0tkGC89veR7EF1Iku6pywyOPT4J1wd/6nC0e0QvkYV+PAAk0Zs7yuu50blT7JEWXXr8I="
                                    }
                                },
                                "balanceCommitment": {
                                    "inner": "HsCUR3HHhTE94J3wtb3+1Afd638NdMZp6yLIAjwRwRA="
                                },
                                "wrappedMemoKey": "sg2O9Mz5BRpd1BmkpUA1rf8g50C4yi2HGu9wbtCQMAj3y1RYzmzyOV2AnrDefI9v",
                                "ovkWrappedKey": "gGIJgv6AQ7i/S2vl4N4oKAttdXlqLYJvD/nR60CTvG942fCbuNdqFiRx+7azXZ3b"
                            },
                            "proof": {
                                "inner": "v7UowV4G6CQYW/LPxXSaZfQqd2NYN/xR2bgsvf+xFpVzmR8hkX7dGaOwsAplQvUAaPNh/GkA9U9XYDdWW8sFriT3eNT6bD28Kh0iM957mbnbWr1hcRkSyLGXQcGkZt0AlISmKnc3mlUZoEt+HjBb30hkLJ9bKac906ZzSE9m28EGlDE9Ybi4bRZwXnNeLS+ByBXUmaEA6RawnAkpsIypWy4krB0E0FtYol6ebVsXMQ7b55sEVB8wZZGrG+XdJj+B"
                            }
                        }
                    }
                ],
                "transactionParameters": {
                    "expiryHeight": "0",
                    "chainId": "penumbra-1",
                    "fee": {
                        "amount": {
                            "lo": "934",
                            "hi": "0"
                        }
                    }
                },
                "detectionData": {
                    "fmdClues": [
                        {
                            "inner": "Zvyvt3/3bzdy4U/Gg7DoUQVrvRAI66EHNQLkVtK4AAGS0NjU36oNuO4ULMpljY7p+MLzW9APXqcaWib9jXbTAgAAAAA="
                        },
                        {
                            "inner": "AiVgdRsXtoiFKGcqGJVM495ksPxVH2FOOfT54Njt0AyEdTTgeCJszG33K1f21bdXjwDKPrvYiRsHWaXFLW+kAQAAAAA="
                        }
                    ]
                },
                "memo": {
                    "inner": "btPPf9qWZK0sH34tjK5ZPOcXs5yod6U4MPLuaPiqw0bUWkHLtQP677w+iLsGbay6+vRGDEqkr/UEGYNtuHiBvEmGs+sljmF/XSYRpyMXvTzIWZagz0zWlkow8pppo2HXCQSxqzl9+2biIjqVzSM8YT8+68wD/5AS31slRBiHNYxU24K7nciiY5ZRU7FovpdmTA+mtrJRsldCvKAQktGxuvrfdiGskjvaGTAOKhwKsod55q72OFeEMV/Jap/Q34PEKtxB0rdnXlxJbFLEO9fhWphhwy2oZ2Wih0zLac/gXutTg7OsCcFLd8E1OW2HfK6gpTa0i/bScQRXs/p2xThhfgwtO0P2Xx1DksmAR9pUSzlawiz8ML+18P9/heKeiWudscJlCGzgEtl/zYcb9GLkmWbQ/a8Q7te7NMD4JzVV7zMxxV2ehWa+2hRQ53kqbSOA3ttAODsHDfN8gjGXtE6nSxfkpvL9cHXGyvD3BkYOOTwQJyMIKnVIgjCZj3hzq3zo5OH3H14+6jqwOfKsO5PTteMVclHwGN4ZnyByBwE4eFxhDVH4IvSQLBUoKya56+sXwiwl03J7j07PRDyHSlJfAFZczwd4oWRts50Zjwy08kBj8nWECrbcFnFFtciFnQQajMlVMmPYzaYziNZ884YGOWBSXk/u0gml4keV4v2BEGmkl6gBBxs7NvUXpN/N7Xn0"
                }
            },
            "bindingSig": {
                "inner": "WjmrMekZzhoXe/W0v4ldnFAKnaoDFBNUMirMiW4Szw3CAGGlSzTT8aChVfwH06C5ESS1RnS9LaG5IcINbLNyAA=="
            },
            "anchor": {
                "inner": "6Sl4dHiixAfonpimJltogjgp3oAA1X0mk2+p+ETdYBI="
            }
        },
        "perspective": {
            "payloadKeys": [
                {
                    "payloadKey": {
                        "inner": "yO4N4zCPtJJeMdO02eWZ5BBKy+9+ik+cpJCMGf95lU0="
                    },
                    "commitment": {
                        "inner": "pazd7b2PPMV/XN6yfARUjIQ7p7uxyKXdiBuXpzIM3gQ="
                    }
                },
                {
                    "payloadKey": {
                        "inner": "pPxOkCE+2OhnV5hC06/5AolI1QuvOv6dirTy7pKhpnY="
                    },
                    "commitment": {
                        "inner": "hSuEnjCkY4NNOXs0h5D0+rxoA+QX1lJohPJP2tKlehI="
                    }
                }
            ],
            "spendNullifiers": [
                {
                    "nullifier": {
                        "inner": "BeraS8jfThADBEaz8wJq6V1N8wYP2uMznMJWQgXmuwk="
                    },
                    "note": {
                        "value": {
                            "amount": {
                                "lo": "2004991813",
                                "hi": "0"
                            },
                            "assetId": {
                                "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                "altBech32m": "",
                                "altBaseDenom": ""
                            }
                        },
                        "rseed": "mnTQLSvNIwh8peP+5+UTKFeKQbweN0yp4p91qYIcLnw=",
                        "address": {
                            "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                            "altBech32m": ""
                        }
                    }
                }
            ],
            "adviceNotes": [],
            "addressViews": [
                {
                    "decoded": {
                        "address": {
                            "inner": "uh2tueOsTywW1Bf51kZUqQKQ/QgNppKFCE1Hjdo/LIFkbB9+Jhjck1+NBN79KWgp9PongMDAF9W8PbjONjzkEatT75HBpw4mstMn9uwqRzQ=",
                            "altBech32m": ""
                        },
                        "index": {
                            "account": 1,
                            "randomizer": ""
                        },
                        "walletId": {
                            "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                        }
                    }
                },
                {
                    "decoded": {
                        "address": {
                            "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                            "altBech32m": ""
                        },
                        "index": {
                            "account": 0,
                            "randomizer": ""
                        },
                        "walletId": {
                            "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                        }
                    }
                }
            ],
            "denoms": [
                {
                    "description": "The native token of Penumbra",
                    "denomUnits": [
                        {
                            "denom": "penumbra",
                            "exponent": 6,
                            "aliases": []
                        },
                        {
                            "denom": "mpenumbra",
                            "exponent": 3,
                            "aliases": []
                        },
                        {
                            "denom": "upenumbra",
                            "exponent": 0,
                            "aliases": []
                        }
                    ],
                    "base": "upenumbra",
                    "display": "penumbra",
                    "name": "Penumbra",
                    "symbol": "UM",
                    "penumbraAssetId": {
                        "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                        "altBech32m": "",
                        "altBaseDenom": ""
                    },
                    "images": [
                        {
                            "png": "",
                            "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                            "theme": {
                                "primaryColorHex": "#c9a975",
                                "circle": false,
                                "darkMode": false
                            }
                        }
                    ],
                    "priorityScore": "999999999999",
                    "badges": [],
                    "coingeckoId": "penumbra"
                }
            ],
            "transactionId": {
                "inner": "qBXeSMn9j7UD7l2oIrOFGoUS3Ol81Xo8238JCD/3RMI="
            },
            "prices": [],
            "extendedMetadata": [],
            "creationTransactionIdsByNullifier": [],
            "nullificationTransactionIdsByCommitment": [],
            "batchSwapOutputData": []
        },
        "view": {
            "bodyView": {
                "actionViews": [
                    {
                        "spend": {
                            "visible": {
                                "spend": {
                                    "body": {
                                        "balanceCommitment": {
                                            "inner": "uGA+DPDZ5BGuevlVmdIddv1aZ1YryU6KnwYjyt6srRE="
                                        },
                                        "rk": {
                                            "inner": "fg319WkiKb/Rdq9N6oA6wg9j4+IiWlibtSCoxTWg9As="
                                        },
                                        "nullifier": {
                                            "inner": "BeraS8jfThADBEaz8wJq6V1N8wYP2uMznMJWQgXmuwk="
                                        },
                                        "encryptedBackref": "pEthJ4T0OzlfYuzCjsLkHMshRDwSNwSL/RI44qHHnzMpwttq2j1A2kZ8NcAl8BlE"
                                    },
                                    "authSig": {
                                        "inner": "hC6/bH2aBEppKMyhECGIsK5aVqAnu9qZbE4cYhYLUQlpLl723MGJ0aV8BBee/VUdH2+rCgzE8qgmBlGOgI8VAw=="
                                    },
                                    "proof": {
                                        "inner": "87nTurZgLOJ4MyxC0tUO+LuRt4tCuTQgCNtcEE3Fg2sPpHNl3b1Zy4aq0XZ+oIgAc+1GwNieq7QvP3+kSThx399GiS5miw3VCQG7GKFaacNlNtMpPB+NT59r5zN6VgUBxKpJpQL4ED1XF7oZpK/zmyvwGvrMmCDY/1LgLZ0ZLei6q91vHNnBRjMLDTzrN3uAScX8NsHIeqJpLKQC2apKbw7aWCXJm/IUwlYlbFFGBKfB293WQ+ryIGljaRFtoqYA"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "2004991813",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "The native token of Penumbra",
                                                "denomUnits": [
                                                    {
                                                        "denom": "penumbra",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "mpenumbra",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "upenumbra",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "upenumbra",
                                                "display": "penumbra",
                                                "name": "Penumbra",
                                                "symbol": "UM",
                                                "penumbraAssetId": {
                                                    "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "",
                                                        "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#c9a975",
                                                            "circle": false,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "999999999999",
                                                "badges": [],
                                                "coingeckoId": "penumbra"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "mnTQLSvNIwh8peP+5+UTKFeKQbweN0yp4p91qYIcLnw=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    {
                        "output": {
                            "visible": {
                                "output": {
                                    "body": {
                                        "notePayload": {
                                            "noteCommitment": {
                                                "inner": "pazd7b2PPMV/XN6yfARUjIQ7p7uxyKXdiBuXpzIM3gQ="
                                            },
                                            "ephemeralKey": "OrQWuvr6SVsc7cIeHlzORuWthtOVO9npfxw4vMyJ3ws=",
                                            "encryptedNote": {
                                                "inner": "oiEbIlBLvSHRVW0ZvF1tem5NaRWELj4zrnP3b9AenUyF9o5xE+eqBuj/gc1i/0RZRQ8OV9+JcCx4mgl/euegunztAZ8UOrPOEOP86sJah6KtcZYhDsI0KdTDjUTD0OOkJgi/aV9ZEab5QR0yxnvKTVBMYJRr+OaxObJQBRvDBQAO2ImicwJBi3NBDPyraNVF1XdEIHOgWXl/Gmbop+q5Y+hsQ7dz+vXWl50i6qhHwEM="
                                            }
                                        },
                                        "balanceCommitment": {
                                            "inner": "JgGtZdqVX/oNkdCJXy5WdwtGpVo9Hvrtg0Gnci+gIAY="
                                        },
                                        "wrappedMemoKey": "ehCjOsQTJj1ZepAw5K8+GB6DCq173akklbqeboCNol/x2zqFZTbngKtmOGukpzBW",
                                        "ovkWrappedKey": "hzEDxYfWRj/bHswxICmg/ZD+zzkJqxmBolOS2Ik6SsmDM9jc3qTQ+3tKA/8aQHUG"
                                    },
                                    "proof": {
                                        "inner": "aI/kYiSz7rVdqoQd2ooCdzHFlWYQrVG2KR9788vbpAxNTsMxrEJa9Jzyzr8Xk3eBy2YJSaTTIOB1XN3Y+/oHrq/3QCdFmcOQ2DpKLAOfkEcHSo+oafdYouEHYpPwADoBssBUl0mvAiMReMFRt5+x/ZJyh9s1WwJeSiQYUONF4Wu0Wc5ehG2MrclTvDd7ZVsAMac+NJK3T5DYVwNv03WinIKHNIphhrBezh7DymlxprszG3Dqfuyh7RRhqEofvIiB"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "2000000",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "The native token of Penumbra",
                                                "denomUnits": [
                                                    {
                                                        "denom": "penumbra",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "mpenumbra",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "upenumbra",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "upenumbra",
                                                "display": "penumbra",
                                                "name": "Penumbra",
                                                "symbol": "UM",
                                                "penumbraAssetId": {
                                                    "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "",
                                                        "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#c9a975",
                                                            "circle": false,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "999999999999",
                                                "badges": [],
                                                "coingeckoId": "penumbra"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "9S2fT+GgQbJjM/jQk+vLgFCwNkxGKdLDnvW1O0MyDF8=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "uh2tueOsTywW1Bf51kZUqQKQ/QgNppKFCE1Hjdo/LIFkbB9+Jhjck1+NBN79KWgp9PongMDAF9W8PbjONjzkEatT75HBpw4mstMn9uwqRzQ=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 1,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                },
                                "payloadKey": {
                                    "inner": "v/uDOz/0wBgnu678/1yFUH7xJHf9/PfYC4AQvXL3gJU="
                                }
                            }
                        }
                    },
                    {
                        "output": {
                            "visible": {
                                "output": {
                                    "body": {
                                        "notePayload": {
                                            "noteCommitment": {
                                                "inner": "hSuEnjCkY4NNOXs0h5D0+rxoA+QX1lJohPJP2tKlehI="
                                            },
                                            "ephemeralKey": "ZEfh0Ir1su6ysOFGUM0QQUUYFZ5i+xiob3J7XrS33gg=",
                                            "encryptedNote": {
                                                "inner": "jmlX1b+j1s635mWL93RCwN+Nft9M60+PLrrwZ9pv5n84Mv1Giu42Uy3QMFmcgqLOiq9RJ5zIm5Olcg5Ae3b/vgypOWKyEyiHFmAVg+zMGi1SySiXqueuPAkbxveMDIU/AZu975B+v8ch6R1S3iw606jVrfDs8VRDqta7QiZ0tkGC89veR7EF1Iku6pywyOPT4J1wd/6nC0e0QvkYV+PAAk0Zs7yuu50blT7JEWXXr8I="
                                            }
                                        },
                                        "balanceCommitment": {
                                            "inner": "HsCUR3HHhTE94J3wtb3+1Afd638NdMZp6yLIAjwRwRA="
                                        },
                                        "wrappedMemoKey": "sg2O9Mz5BRpd1BmkpUA1rf8g50C4yi2HGu9wbtCQMAj3y1RYzmzyOV2AnrDefI9v",
                                        "ovkWrappedKey": "gGIJgv6AQ7i/S2vl4N4oKAttdXlqLYJvD/nR60CTvG942fCbuNdqFiRx+7azXZ3b"
                                    },
                                    "proof": {
                                        "inner": "v7UowV4G6CQYW/LPxXSaZfQqd2NYN/xR2bgsvf+xFpVzmR8hkX7dGaOwsAplQvUAaPNh/GkA9U9XYDdWW8sFriT3eNT6bD28Kh0iM957mbnbWr1hcRkSyLGXQcGkZt0AlISmKnc3mlUZoEt+HjBb30hkLJ9bKac906ZzSE9m28EGlDE9Ybi4bRZwXnNeLS+ByBXUmaEA6RawnAkpsIypWy4krB0E0FtYol6ebVsXMQ7b55sEVB8wZZGrG+XdJj+B"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "2002990879",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "The native token of Penumbra",
                                                "denomUnits": [
                                                    {
                                                        "denom": "penumbra",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "mpenumbra",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "upenumbra",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "upenumbra",
                                                "display": "penumbra",
                                                "name": "Penumbra",
                                                "symbol": "UM",
                                                "penumbraAssetId": {
                                                    "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "",
                                                        "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#c9a975",
                                                            "circle": false,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "999999999999",
                                                "badges": [],
                                                "coingeckoId": "penumbra"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "KS81JokRA8MP2pCvNwpiN1BtZiA3AxgH+QO+xccNR/M=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                },
                                "payloadKey": {
                                    "inner": "v/uDOz/0wBgnu678/1yFUH7xJHf9/PfYC4AQvXL3gJU="
                                }
                            }
                        }
                    }
                ],
                "transactionParameters": {
                    "expiryHeight": "0",
                    "chainId": "penumbra-1",
                    "fee": {
                        "amount": {
                            "lo": "934",
                            "hi": "0"
                        }
                    }
                },
                "detectionData": {
                    "fmdClues": [
                        {
                            "inner": "Zvyvt3/3bzdy4U/Gg7DoUQVrvRAI66EHNQLkVtK4AAGS0NjU36oNuO4ULMpljY7p+MLzW9APXqcaWib9jXbTAgAAAAA="
                        },
                        {
                            "inner": "AiVgdRsXtoiFKGcqGJVM495ksPxVH2FOOfT54Njt0AyEdTTgeCJszG33K1f21bdXjwDKPrvYiRsHWaXFLW+kAQAAAAA="
                        }
                    ]
                },
                "memoView": {
                    "visible": {
                        "ciphertext": {
                            "inner": "btPPf9qWZK0sH34tjK5ZPOcXs5yod6U4MPLuaPiqw0bUWkHLtQP677w+iLsGbay6+vRGDEqkr/UEGYNtuHiBvEmGs+sljmF/XSYRpyMXvTzIWZagz0zWlkow8pppo2HXCQSxqzl9+2biIjqVzSM8YT8+68wD/5AS31slRBiHNYxU24K7nciiY5ZRU7FovpdmTA+mtrJRsldCvKAQktGxuvrfdiGskjvaGTAOKhwKsod55q72OFeEMV/Jap/Q34PEKtxB0rdnXlxJbFLEO9fhWphhwy2oZ2Wih0zLac/gXutTg7OsCcFLd8E1OW2HfK6gpTa0i/bScQRXs/p2xThhfgwtO0P2Xx1DksmAR9pUSzlawiz8ML+18P9/heKeiWudscJlCGzgEtl/zYcb9GLkmWbQ/a8Q7te7NMD4JzVV7zMxxV2ehWa+2hRQ53kqbSOA3ttAODsHDfN8gjGXtE6nSxfkpvL9cHXGyvD3BkYOOTwQJyMIKnVIgjCZj3hzq3zo5OH3H14+6jqwOfKsO5PTteMVclHwGN4ZnyByBwE4eFxhDVH4IvSQLBUoKya56+sXwiwl03J7j07PRDyHSlJfAFZczwd4oWRts50Zjwy08kBj8nWECrbcFnFFtciFnQQajMlVMmPYzaYziNZ884YGOWBSXk/u0gml4keV4v2BEGmkl6gBBxs7NvUXpN/N7Xn0"
                        },
                        "plaintext": {
                            "returnAddress": {
                                "decoded": {
                                    "address": {
                                        "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                        "altBech32m": ""
                                    },
                                    "index": {
                                        "account": 0,
                                        "randomizer": ""
                                    },
                                    "walletId": {
                                        "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                    }
                                }
                            },
                            "text": "test"
                        }
                    }
                }
            },
            "bindingSig": {
                "inner": "WjmrMekZzhoXe/W0v4ldnFAKnaoDFBNUMirMiW4Szw3CAGGlSzTT8aChVfwH06C5ESS1RnS9LaG5IcINbLNyAA=="
            },
            "anchor": {
                "inner": "6Sl4dHiixAfonpimJltogjgp3oAA1X0mk2+p+ETdYBI="
            }
        },
        "summary": {
            "effects": [
                {
                    "address": {
                        "opaque": {
                            "address": {
                                "inner": "uh2tueOsTywW1Bf51kZUqQKQ/QgNppKFCE1Hjdo/LIFkbB9+Jhjck1+NBN79KWgp9PongMDAF9W8PbjONjzkEatT75HBpw4mstMn9uwqRzQ=",
                                "altBech32m": ""
                            }
                        }
                    },
                    "balance": {
                        "values": [
                            {
                                "value": {
                                    "amount": {
                                        "lo": "2000000",
                                        "hi": "0"
                                    },
                                    "assetId": {
                                        "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    }
                                },
                                "negated": true
                            }
                        ]
                    }
                },
                {
                    "address": {
                        "opaque": {
                            "address": {
                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                "altBech32m": ""
                            }
                        }
                    },
                    "balance": {
                        "values": [
                            {
                                "value": {
                                    "amount": {
                                        "lo": "2000934",
                                        "hi": "0"
                                    },
                                    "assetId": {
                                        "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    }
                                },
                                "negated": false
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        "height": "4450924",
        "id": {
            "inner": "C00f2/rGWUF+jK1KsihuaAUGwUHCoPDBb8fc87y+PdY="
        },
        "transaction": {
            "body": {
                "actions": [
                    {
                        "spend": {
                            "body": {
                                "balanceCommitment": {
                                    "inner": "Em3FgUZ7hphUjeDn1sqvAK8tdRIKj5ujTLeZyPGTcQw="
                                },
                                "rk": {
                                    "inner": "JCnMHsMqrpjtL21pR1yx/o8FDjIYLTyO8Rb6ZhlBxgw="
                                },
                                "nullifier": {
                                    "inner": "lC5qcWc2yLuT9bqk8eOVD+lEAK3kvX35O6sLv3KrnAk="
                                },
                                "encryptedBackref": "nEGDXRRNjE5Iy1wPdBVJhm4TvP9g+K65hft9NhMP7W8YFtNmpJ2cANS5Y1s2ZHYh"
                            },
                            "authSig": {
                                "inner": "jsE9a5Rz8Mr6mxDuFw435L8kOFsU7ZLsLrAq31Gt1RBcxmv50tL+nxBEUwAoz3SVv8gwUmT/GwTQabQMYNkAAA=="
                            },
                            "proof": {
                                "inner": "p15NJJEp86XV0Unb9xNgMLjbfRnc2K52AyjtFNC8v3I0Z5hk0W2KArCCMYUK6qQBRZG7DRDDakip24nH4FOhxc9WkWUjj4m+hsRjNaIZGYbYDh+IFPFAWjBSnQTQHGMB/SDTTJFTgI+L3ZoBmNv04RroEmw59G2NzgfI+thSJlaioLw49FKbR2dquf9eSaGBHSnr4o0yuK4r8+iS3cmEtkXOvbB8a58kHNAl2E5ylaPMj4WzUF2Zo/ypmSYPtXGA"
                            }
                        }
                    },
                    {
                        "spend": {
                            "body": {
                                "balanceCommitment": {
                                    "inner": "9ExqYamq5HNrWLP+sda+pKOQguA4PH4vrIjGmVkQ1QQ="
                                },
                                "rk": {
                                    "inner": "SoNHy5R2MmO0sE+gbGtnF4TTmrQUySAZJqgwQqJtIRI="
                                },
                                "nullifier": {
                                    "inner": "k0hrQpFaRgtTakS5yKPte3iyLSXBFlboYGb231pVsBE="
                                },
                                "encryptedBackref": "FHyXeGcynE2nc9Q95rxvDMwkec6zTMzCxQ+NFk7HgL6KAjX0pOn9CAc/LsbZNz/A"
                            },
                            "authSig": {
                                "inner": "ttTgzF2bkMO2HGefKTgcJ96yCSfv20yHJlfPtvSb6gtRlke1nEL35aH3U+TVyBTSE1ryoxdZf5kCIicCfkHIAw=="
                            },
                            "proof": {
                                "inner": "kFnT56Ohq9QCG10KUcALAs0pf9QfzskIQWJyAOtmWacWA1/addZ2xCAcWaX1pBGB0Avw6K/PueV4wrnwhW9xMb4+2MP31WLANX21IBerP+PP+UqRvzw2MT8P0HskNoABnErXUIS5bKM7LZ6YyYVkyaRMImY81rXfyzyewdhCSZlTRq7UjBoJGj/SMlsTC98Agt8lPQ9VI18FPvPiiPeBlcFSwMqqEHThiNo5dSuM/wfFVFne0DP1g4XaEGiIHjCA"
                            }
                        }
                    },
                    {
                        "output": {
                            "body": {
                                "notePayload": {
                                    "noteCommitment": {
                                        "inner": "ppxdSYCrOcNtS1b3z9q5jeZPnFFECwvfYy0MvG08lQM="
                                    },
                                    "ephemeralKey": "uLOf7/UFr23eWV+w1BmwlvAkdxj0LVHymqgsYrLj2gY=",
                                    "encryptedNote": {
                                        "inner": "Y67zRq+GxZpbt25TO/KTZ9FI+RKvS8onqHSVOGjvpBvTUvSDofX95hl3rn84m3sX87o/26A1IkVDSV5vhpvtffsJ7W/ZJ4XLzrn92wzXTAnP/kCKzLDGCxXGo5qNmemFnFaENU4E/x0LGSe2rr9hezbRA/m2KnvEPhfl7RIS6aJfcU55OGo0Cj8sVgpfEFFXRUdiRQVKO+bPMneqr/FOAI5bY/a2HNtZfeke75fgKPc="
                                    }
                                },
                                "balanceCommitment": {
                                    "inner": "mLVHOpoHBEBdl3luN2iSNY+ad7zToSb5gRv22d3YUgU="
                                },
                                "wrappedMemoKey": "wETYOrmgX4W3JxaSqYxq+wNKwlNCSaXtveHd0tOBzkiO+LJQAkf0RRZUNV2cPZri",
                                "ovkWrappedKey": "+HfY+xblDUWVH4TL/71hJ6WmsnSxg/lvWymz7YkZLf7+eB0DPFz9vGnjUGQ+3v5w"
                            },
                            "proof": {
                                "inner": "s6BWHHWneGnPMzZXytvOJs20n7cH+A3BcrpONB8dKFQfg6cuJhAR3mwZCYhzlnwBLL2PnRtonRjWw/U5vPhJ4FNjZqBOIJYARUtIC2LZDe6vv9rUSzk1Z9H7wc5K6GwBEIexShYnkS4YQSpPGOpBO3VuHwiB9igA6rIUUR94MieOulMxmUYdaeCrgNM9vYyA5cJ1UdbOgfJb6Qc2ukNbfQcom4vJj9M+cr/IWMrfcsUNDbjZFla18qyI44XbBx8B"
                            }
                        }
                    },
                    {
                        "output": {
                            "body": {
                                "notePayload": {
                                    "noteCommitment": {
                                        "inner": "UU9yAz50S7ppdx1nM80zXmE94sLZQh0PJEPCq10+uA0="
                                    },
                                    "ephemeralKey": "3OFrgsPnDP+McLywVmvDZtAtr+JO5+bHmHb0FyOclAI=",
                                    "encryptedNote": {
                                        "inner": "9bn6fkW6cN+4O3c1UgXEHM83shaqSnDeYDDPUXfAP4FpVtJf+IVITnEFBpYF08/ysvW8N+JSuHXE7sSb8PIoQ6XAj+a3oJv62E3PeRSB4OjpuLmtn/dUpoB12wAHJ/NpamuBfpRbdN77vJTSMsyy6hCHY+CkWUCz3Jqv/XDsB5csIjaLbEkODRyEF8Dj5/7albRgPT3A6DQbhaEuv1FQfDJr7ERrR1X0tI6cQf7tHmk="
                                    }
                                },
                                "balanceCommitment": {
                                    "inner": "XFvezYJMN1sF2DZca25QqrejOJs6XfaV8HI3CCQGywQ="
                                },
                                "wrappedMemoKey": "c/PvyoXNjIp1cOOZ+9ieGim9dOfniFD3XxO/VU1ByhyMG97VtBTh8CpjQio3Xoq/",
                                "ovkWrappedKey": "FYYPtvYYlWQJfdBe+y02Ns21bYLR06idpRYglVGqYpMEb+hoGqr4FjtNx6rrokdS"
                            },
                            "proof": {
                                "inner": "ic4amZmG45XN5wXbNXRPXZKqQGLHuatPfMZtCoIiIB9KLsDb3SpTP3m9WEZHwb2AiKE42cF/+YNmcvS8Od8pS2PkBN4Hx/2hOOHq2kcl3gjT4oS9Y/W2SK/DrgtqLAgBFXWxqHCvkAzzZOnFG64b+RMf0JkzS4wfmLDRG2I1y8YewNpP2lR3rQ3nykCiOkSB/+VgGQNiE2Pe/kTAnBu5vMCrSremYyk478h+28SWEwkK4kZbO3L/BADTv9rPnJ8A"
                            }
                        }
                    },
                    {
                        "output": {
                            "body": {
                                "notePayload": {
                                    "noteCommitment": {
                                        "inner": "ytRcuqvnCDXSbMwY9Ws8Ix0w4sbRe8RvjkgYfWsPOgc="
                                    },
                                    "ephemeralKey": "BEaAZHUaDLddKbqihHjxf9aWyAlA0BYFLlcujcYbLwI=",
                                    "encryptedNote": {
                                        "inner": "gHBQ1Bwfkm+gAN1osma8TBlfCsOqeeZeR3scB7VseIw3MaGO1PKEbmXeaCth8LsNi1DeiTwbJII9Ybf5oXrtrkXa7ZXmOMMRDIccHt2w7AkJnzJaZgcTYFKV6ze0rrQNlF3j4cycOegbr7pf9EN5ApH4Do3uRZf+NK9819ZvDb7t5Ul1cbz434aNgD53QeXPC/SIOWTZOIzWGONMkOSvbd8+yI5JwITeCm3VLCUAoMs="
                                    }
                                },
                                "balanceCommitment": {
                                    "inner": "9E7bq1U2/arShvxznz6BdqhCayAenm05j9bv1Bg9wxA="
                                },
                                "wrappedMemoKey": "oGy/4eet3brucaxu1fMYLJXH+z9XHa9DMkQs1vO7YHB/+7Uywxe2q37v5M/jgail",
                                "ovkWrappedKey": "0lLOT7fTyB0qJ/VDlc0d4RH6DQSqzafA7O01XRyutFMzjzqZ6/H0HjFZO+997DFL"
                            },
                            "proof": {
                                "inner": "PFgyabElK/VahOh84/ezCrIamh/mdkewp42rUPeYgtCx2Lrug7e7FPDTm+LktQqBKKQN60fewOcMDxMxxRtMdESCEIJqzyK3Sg51kP/KGG1bjnyUB2jn0dIeLBLXJN0AZWk2q8UBSoV0p99PTGIYUQideHXFzVUMx4mMrUPJByWRRpYjxLXbpFeYQlvN5wWBKcoKEzN6PicRboprIQAaZ2zKWKtSmGKFUYH31efxPvFB2+nQCQ5VfePf7/G4ljcB"
                            }
                        }
                    },
                    {
                        "undelegate": {
                            "validatorIdentity": {
                                "ik": "NAeSi/zd8bsMIoz3yMvVa4vru0OxCxBA/JrY54F0rgc="
                            },
                            "startEpochIndex": "0",
                            "unbondedAmount": {
                                "lo": "28606205",
                                "hi": "0"
                            },
                            "delegationAmount": {
                                "lo": "28000000",
                                "hi": "0"
                            },
                            "fromEpoch": {
                                "index": "170",
                                "startHeight": "4422822"
                            }
                        }
                    }
                ],
                "transactionParameters": {
                    "expiryHeight": "0",
                    "chainId": "penumbra-1",
                    "fee": {
                        "amount": {
                            "lo": "1445",
                            "hi": "0"
                        }
                    }
                },
                "detectionData": {
                    "fmdClues": [
                        {
                            "inner": "7OQ2/M/1jQW1sRodnF9Gm/UfTPyNobTBFao1fzdnQwRiPS/HEwND5fWc2cIQ4nhnGFjLOh9D4uJdn9UpNpaQAwAAAAA="
                        },
                        {
                            "inner": "FGG4t17tGhvPIVWUwxR0xhk258y7t0IE21Nm5CKh0QxJVSE9XTRjNcHoAVjFGvWNoNcITBSz0FbLzG22J/B6AgAAAAA="
                        },
                        {
                            "inner": "ZBME11OwF4kE1OfEpGNU4LtzKae1zhilS6/GMycuxwpdlFgauT/pFf0drUQIzr+xbvuFrCJdv7nqpHcZHrFeAQAAAAA="
                        }
                    ]
                },
                "memo": {
                    "inner": "GtbtImf1nx4VmObOG2hJWdkNyaZCazeQrnuIFPrSwpgfsCXje6W/T1meO3rDFlCP4qFHsq0hlSnqfDoXl/IMtvZ9b4lgBwDoRq2eHmj2RNtavNjaq3TDszmfF70xJy9rqHMoTGQwhpfK+NSuZSP6sHxio6e2dFYfvUxF3NGfhaZnYI/MBVwdUog701D3uyjYxNkaiIWO2LgeP+Q5OEqhhbhvPKvGVEGZF5k92cQA6UcUmSKsDxaUHTL/Hs9zpS3sDnzmaO6uY8323D4GfDmoYkhV7hGLrIT6lCJJ81an5FUHqgv6SEHLZ5eYPrUkUPaOWB1O8zXUpVAA6aHe4SFppE6vV9INo2pNLi88unG5kOaUBX02/Wd8gD+CLB4N12kzrKQIsYS4uziIBhDCcZ35glBxpYluaWwVdAc39HfdypVeKgVHYl8MogrwThBXDmKEI0UPWJ5d/ZsyukC+f0mIwSH3xaAQjEv/pMPpJIVDmxPCiKSGB3NO2vaGpMTmvM30pTTnCoVTuRzLwHKQ+D2XcuBpGZfCF4NnPz2PCw36BopTXvFjN+2IcOQH1RDV2YDAS0uJI+9QkXZLXnxHEHyjemnctcrAfa0qb/v4UTw6RyNIilTBEVSFHjXhxaoDAFUZf2nuRV01ugGNXp009HClgcEexm6b5U5EevQceSSl1yZPS39hVQGgvEN2RnRIoDwU"
                }
            },
            "bindingSig": {
                "inner": "+POzS14xxMuivecIoAfomZQlZPKjIBBiwKl5LXeRxA2UZXDvVLJu1XrzAYbZbaZdPLR+ZteN/dVe5q0wQaOFBA=="
            },
            "anchor": {
                "inner": "zhAH1oDzfP1xhOk13QBTUPKk/078vmPB0Zhd3gdVJAk="
            }
        },
        "perspective": {
            "payloadKeys": [
                {
                    "payloadKey": {
                        "inner": "tIgGFQUocpNBJIaYIi6H21H5oDml9bWdL1mhHNGq/2s="
                    },
                    "commitment": {
                        "inner": "ppxdSYCrOcNtS1b3z9q5jeZPnFFECwvfYy0MvG08lQM="
                    }
                },
                {
                    "payloadKey": {
                        "inner": "33CvtHeiOoFXC/6hwlEqYklC1VOmHo6pHrawqWRdiDU="
                    },
                    "commitment": {
                        "inner": "ytRcuqvnCDXSbMwY9Ws8Ix0w4sbRe8RvjkgYfWsPOgc="
                    }
                },
                {
                    "payloadKey": {
                        "inner": "V+CL6N69Ain26C4YVjMODH/Jrbocr/LUYSJP0wYSjSg="
                    },
                    "commitment": {
                        "inner": "UU9yAz50S7ppdx1nM80zXmE94sLZQh0PJEPCq10+uA0="
                    }
                }
            ],
            "spendNullifiers": [
                {
                    "nullifier": {
                        "inner": "lC5qcWc2yLuT9bqk8eOVD+lEAK3kvX35O6sLv3KrnAk="
                    },
                    "note": {
                        "value": {
                            "amount": {
                                "lo": "68604594",
                                "hi": "0"
                            },
                            "assetId": {
                                "inner": "Um2RXXeng0wMA+LHj8DOPqFr36veafb029EK+2ItAQk=",
                                "altBech32m": "",
                                "altBaseDenom": ""
                            }
                        },
                        "rseed": "y+q0oqOm3n6c1AYMaJ0ibkVnBoTGbbUpFhbt/mEUT2o=",
                        "address": {
                            "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                            "altBech32m": ""
                        }
                    }
                },
                {
                    "nullifier": {
                        "inner": "k0hrQpFaRgtTakS5yKPte3iyLSXBFlboYGb231pVsBE="
                    },
                    "note": {
                        "value": {
                            "amount": {
                                "lo": "2004993258",
                                "hi": "0"
                            },
                            "assetId": {
                                "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                "altBech32m": "",
                                "altBaseDenom": ""
                            }
                        },
                        "rseed": "s6KfakIOzdoX0r8+wEsEKBtoZ/DMBzOBW3HM3fQ1xkk=",
                        "address": {
                            "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                            "altBech32m": ""
                        }
                    }
                }
            ],
            "adviceNotes": [],
            "addressViews": [
                {
                    "decoded": {
                        "address": {
                            "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                            "altBech32m": ""
                        },
                        "index": {
                            "account": 0,
                            "randomizer": ""
                        },
                        "walletId": {
                            "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                        }
                    }
                }
            ],
            "denoms": [
                {
                    "description": "",
                    "denomUnits": [
                        {
                            "denom": "unbonding_start_at_4422822_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                            "exponent": 6,
                            "aliases": []
                        },
                        {
                            "denom": "munbonding_start_at_4422822_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                            "exponent": 3,
                            "aliases": []
                        },
                        {
                            "denom": "uunbonding_start_at_4422822_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                            "exponent": 0,
                            "aliases": []
                        }
                    ],
                    "base": "uunbonding_start_at_4422822_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                    "display": "unbonding_start_at_4422822_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                    "name": "",
                    "symbol": "unbondUMat4422822(xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa)",
                    "penumbraAssetId": {
                        "inner": "gSpLoUkuIcAAzwcA24ymgAGreRZCbZ9bUk0Yl352oAE=",
                        "altBech32m": "",
                        "altBaseDenom": ""
                    },
                    "images": [],
                    "priorityScore": "0",
                    "badges": [],
                    "coingeckoId": ""
                },
                {
                    "description": "",
                    "denomUnits": [
                        {
                            "denom": "delegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                            "exponent": 6,
                            "aliases": []
                        },
                        {
                            "denom": "mdelegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                            "exponent": 3,
                            "aliases": []
                        },
                        {
                            "denom": "udelegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                            "exponent": 0,
                            "aliases": []
                        }
                    ],
                    "base": "udelegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                    "display": "delegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                    "name": "",
                    "symbol": "delUM(xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa)",
                    "penumbraAssetId": {
                        "inner": "Um2RXXeng0wMA+LHj8DOPqFr36veafb029EK+2ItAQk=",
                        "altBech32m": "",
                        "altBaseDenom": ""
                    },
                    "images": [],
                    "priorityScore": "0",
                    "badges": [],
                    "coingeckoId": ""
                },
                {
                    "description": "The native token of Penumbra",
                    "denomUnits": [
                        {
                            "denom": "penumbra",
                            "exponent": 6,
                            "aliases": []
                        },
                        {
                            "denom": "mpenumbra",
                            "exponent": 3,
                            "aliases": []
                        },
                        {
                            "denom": "upenumbra",
                            "exponent": 0,
                            "aliases": []
                        }
                    ],
                    "base": "upenumbra",
                    "display": "penumbra",
                    "name": "Penumbra",
                    "symbol": "UM",
                    "penumbraAssetId": {
                        "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                        "altBech32m": "",
                        "altBaseDenom": ""
                    },
                    "images": [
                        {
                            "png": "",
                            "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                            "theme": {
                                "primaryColorHex": "#c9a975",
                                "circle": false,
                                "darkMode": false
                            }
                        }
                    ],
                    "priorityScore": "999999999999",
                    "badges": [],
                    "coingeckoId": "penumbra"
                }
            ],
            "transactionId": {
                "inner": "C00f2/rGWUF+jK1KsihuaAUGwUHCoPDBb8fc87y+PdY="
            },
            "prices": [],
            "extendedMetadata": [],
            "creationTransactionIdsByNullifier": [],
            "nullificationTransactionIdsByCommitment": [],
            "batchSwapOutputData": []
        },
        "view": {
            "bodyView": {
                "actionViews": [
                    {
                        "spend": {
                            "visible": {
                                "spend": {
                                    "body": {
                                        "balanceCommitment": {
                                            "inner": "Em3FgUZ7hphUjeDn1sqvAK8tdRIKj5ujTLeZyPGTcQw="
                                        },
                                        "rk": {
                                            "inner": "JCnMHsMqrpjtL21pR1yx/o8FDjIYLTyO8Rb6ZhlBxgw="
                                        },
                                        "nullifier": {
                                            "inner": "lC5qcWc2yLuT9bqk8eOVD+lEAK3kvX35O6sLv3KrnAk="
                                        },
                                        "encryptedBackref": "nEGDXRRNjE5Iy1wPdBVJhm4TvP9g+K65hft9NhMP7W8YFtNmpJ2cANS5Y1s2ZHYh"
                                    },
                                    "authSig": {
                                        "inner": "jsE9a5Rz8Mr6mxDuFw435L8kOFsU7ZLsLrAq31Gt1RBcxmv50tL+nxBEUwAoz3SVv8gwUmT/GwTQabQMYNkAAA=="
                                    },
                                    "proof": {
                                        "inner": "p15NJJEp86XV0Unb9xNgMLjbfRnc2K52AyjtFNC8v3I0Z5hk0W2KArCCMYUK6qQBRZG7DRDDakip24nH4FOhxc9WkWUjj4m+hsRjNaIZGYbYDh+IFPFAWjBSnQTQHGMB/SDTTJFTgI+L3ZoBmNv04RroEmw59G2NzgfI+thSJlaioLw49FKbR2dquf9eSaGBHSnr4o0yuK4r8+iS3cmEtkXOvbB8a58kHNAl2E5ylaPMj4WzUF2Zo/ypmSYPtXGA"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "68604594",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "",
                                                "denomUnits": [
                                                    {
                                                        "denom": "delegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "mdelegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "udelegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "udelegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                "display": "delegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                "name": "",
                                                "symbol": "delUM(xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa)",
                                                "penumbraAssetId": {
                                                    "inner": "Um2RXXeng0wMA+LHj8DOPqFr36veafb029EK+2ItAQk=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [],
                                                "priorityScore": "0",
                                                "badges": [],
                                                "coingeckoId": ""
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "y+q0oqOm3n6c1AYMaJ0ibkVnBoTGbbUpFhbt/mEUT2o=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    {
                        "spend": {
                            "visible": {
                                "spend": {
                                    "body": {
                                        "balanceCommitment": {
                                            "inner": "9ExqYamq5HNrWLP+sda+pKOQguA4PH4vrIjGmVkQ1QQ="
                                        },
                                        "rk": {
                                            "inner": "SoNHy5R2MmO0sE+gbGtnF4TTmrQUySAZJqgwQqJtIRI="
                                        },
                                        "nullifier": {
                                            "inner": "k0hrQpFaRgtTakS5yKPte3iyLSXBFlboYGb231pVsBE="
                                        },
                                        "encryptedBackref": "FHyXeGcynE2nc9Q95rxvDMwkec6zTMzCxQ+NFk7HgL6KAjX0pOn9CAc/LsbZNz/A"
                                    },
                                    "authSig": {
                                        "inner": "ttTgzF2bkMO2HGefKTgcJ96yCSfv20yHJlfPtvSb6gtRlke1nEL35aH3U+TVyBTSE1ryoxdZf5kCIicCfkHIAw=="
                                    },
                                    "proof": {
                                        "inner": "kFnT56Ohq9QCG10KUcALAs0pf9QfzskIQWJyAOtmWacWA1/addZ2xCAcWaX1pBGB0Avw6K/PueV4wrnwhW9xMb4+2MP31WLANX21IBerP+PP+UqRvzw2MT8P0HskNoABnErXUIS5bKM7LZ6YyYVkyaRMImY81rXfyzyewdhCSZlTRq7UjBoJGj/SMlsTC98Agt8lPQ9VI18FPvPiiPeBlcFSwMqqEHThiNo5dSuM/wfFVFne0DP1g4XaEGiIHjCA"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "2004993258",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "The native token of Penumbra",
                                                "denomUnits": [
                                                    {
                                                        "denom": "penumbra",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "mpenumbra",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "upenumbra",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "upenumbra",
                                                "display": "penumbra",
                                                "name": "Penumbra",
                                                "symbol": "UM",
                                                "penumbraAssetId": {
                                                    "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "",
                                                        "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#c9a975",
                                                            "circle": false,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "999999999999",
                                                "badges": [],
                                                "coingeckoId": "penumbra"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "s6KfakIOzdoX0r8+wEsEKBtoZ/DMBzOBW3HM3fQ1xkk=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    {
                        "output": {
                            "visible": {
                                "output": {
                                    "body": {
                                        "notePayload": {
                                            "noteCommitment": {
                                                "inner": "ppxdSYCrOcNtS1b3z9q5jeZPnFFECwvfYy0MvG08lQM="
                                            },
                                            "ephemeralKey": "uLOf7/UFr23eWV+w1BmwlvAkdxj0LVHymqgsYrLj2gY=",
                                            "encryptedNote": {
                                                "inner": "Y67zRq+GxZpbt25TO/KTZ9FI+RKvS8onqHSVOGjvpBvTUvSDofX95hl3rn84m3sX87o/26A1IkVDSV5vhpvtffsJ7W/ZJ4XLzrn92wzXTAnP/kCKzLDGCxXGo5qNmemFnFaENU4E/x0LGSe2rr9hezbRA/m2KnvEPhfl7RIS6aJfcU55OGo0Cj8sVgpfEFFXRUdiRQVKO+bPMneqr/FOAI5bY/a2HNtZfeke75fgKPc="
                                            }
                                        },
                                        "balanceCommitment": {
                                            "inner": "mLVHOpoHBEBdl3luN2iSNY+ad7zToSb5gRv22d3YUgU="
                                        },
                                        "wrappedMemoKey": "wETYOrmgX4W3JxaSqYxq+wNKwlNCSaXtveHd0tOBzkiO+LJQAkf0RRZUNV2cPZri",
                                        "ovkWrappedKey": "+HfY+xblDUWVH4TL/71hJ6WmsnSxg/lvWymz7YkZLf7+eB0DPFz9vGnjUGQ+3v5w"
                                    },
                                    "proof": {
                                        "inner": "s6BWHHWneGnPMzZXytvOJs20n7cH+A3BcrpONB8dKFQfg6cuJhAR3mwZCYhzlnwBLL2PnRtonRjWw/U5vPhJ4FNjZqBOIJYARUtIC2LZDe6vv9rUSzk1Z9H7wc5K6GwBEIexShYnkS4YQSpPGOpBO3VuHwiB9igA6rIUUR94MieOulMxmUYdaeCrgNM9vYyA5cJ1UdbOgfJb6Qc2ukNbfQcom4vJj9M+cr/IWMrfcsUNDbjZFla18qyI44XbBx8B"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "28606205",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "",
                                                "denomUnits": [
                                                    {
                                                        "denom": "unbonding_start_at_4422822_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "munbonding_start_at_4422822_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "uunbonding_start_at_4422822_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "uunbonding_start_at_4422822_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                "display": "unbonding_start_at_4422822_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                "name": "",
                                                "symbol": "unbondUMat4422822(xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa)",
                                                "penumbraAssetId": {
                                                    "inner": "gSpLoUkuIcAAzwcA24ymgAGreRZCbZ9bUk0Yl352oAE=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [],
                                                "priorityScore": "0",
                                                "badges": [],
                                                "coingeckoId": ""
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "8cTg9P4X9T3hLZ8PiG1loCmbuiu0cHRs6jMHAJZKLDU=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                },
                                "payloadKey": {
                                    "inner": "5Wp092nPjqd2ZTm8qftCOOLCa9NWGHuR1i7l+dOo5IE="
                                }
                            }
                        }
                    },
                    {
                        "output": {
                            "visible": {
                                "output": {
                                    "body": {
                                        "notePayload": {
                                            "noteCommitment": {
                                                "inner": "UU9yAz50S7ppdx1nM80zXmE94sLZQh0PJEPCq10+uA0="
                                            },
                                            "ephemeralKey": "3OFrgsPnDP+McLywVmvDZtAtr+JO5+bHmHb0FyOclAI=",
                                            "encryptedNote": {
                                                "inner": "9bn6fkW6cN+4O3c1UgXEHM83shaqSnDeYDDPUXfAP4FpVtJf+IVITnEFBpYF08/ysvW8N+JSuHXE7sSb8PIoQ6XAj+a3oJv62E3PeRSB4OjpuLmtn/dUpoB12wAHJ/NpamuBfpRbdN77vJTSMsyy6hCHY+CkWUCz3Jqv/XDsB5csIjaLbEkODRyEF8Dj5/7albRgPT3A6DQbhaEuv1FQfDJr7ERrR1X0tI6cQf7tHmk="
                                            }
                                        },
                                        "balanceCommitment": {
                                            "inner": "XFvezYJMN1sF2DZca25QqrejOJs6XfaV8HI3CCQGywQ="
                                        },
                                        "wrappedMemoKey": "c/PvyoXNjIp1cOOZ+9ieGim9dOfniFD3XxO/VU1ByhyMG97VtBTh8CpjQio3Xoq/",
                                        "ovkWrappedKey": "FYYPtvYYlWQJfdBe+y02Ns21bYLR06idpRYglVGqYpMEb+hoGqr4FjtNx6rrokdS"
                                    },
                                    "proof": {
                                        "inner": "ic4amZmG45XN5wXbNXRPXZKqQGLHuatPfMZtCoIiIB9KLsDb3SpTP3m9WEZHwb2AiKE42cF/+YNmcvS8Od8pS2PkBN4Hx/2hOOHq2kcl3gjT4oS9Y/W2SK/DrgtqLAgBFXWxqHCvkAzzZOnFG64b+RMf0JkzS4wfmLDRG2I1y8YewNpP2lR3rQ3nykCiOkSB/+VgGQNiE2Pe/kTAnBu5vMCrSremYyk478h+28SWEwkK4kZbO3L/BADTv9rPnJ8A"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "40604594",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "",
                                                "denomUnits": [
                                                    {
                                                        "denom": "delegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "mdelegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "udelegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "udelegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                "display": "delegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                "name": "",
                                                "symbol": "delUM(xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa)",
                                                "penumbraAssetId": {
                                                    "inner": "Um2RXXeng0wMA+LHj8DOPqFr36veafb029EK+2ItAQk=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [],
                                                "priorityScore": "0",
                                                "badges": [],
                                                "coingeckoId": ""
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "d/pdn4W/Q83P7DHkocI1Z0R054BcCKTMUcBtHgTZ+kA=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                },
                                "payloadKey": {
                                    "inner": "5Wp092nPjqd2ZTm8qftCOOLCa9NWGHuR1i7l+dOo5IE="
                                }
                            }
                        }
                    },
                    {
                        "output": {
                            "visible": {
                                "output": {
                                    "body": {
                                        "notePayload": {
                                            "noteCommitment": {
                                                "inner": "ytRcuqvnCDXSbMwY9Ws8Ix0w4sbRe8RvjkgYfWsPOgc="
                                            },
                                            "ephemeralKey": "BEaAZHUaDLddKbqihHjxf9aWyAlA0BYFLlcujcYbLwI=",
                                            "encryptedNote": {
                                                "inner": "gHBQ1Bwfkm+gAN1osma8TBlfCsOqeeZeR3scB7VseIw3MaGO1PKEbmXeaCth8LsNi1DeiTwbJII9Ybf5oXrtrkXa7ZXmOMMRDIccHt2w7AkJnzJaZgcTYFKV6ze0rrQNlF3j4cycOegbr7pf9EN5ApH4Do3uRZf+NK9819ZvDb7t5Ul1cbz434aNgD53QeXPC/SIOWTZOIzWGONMkOSvbd8+yI5JwITeCm3VLCUAoMs="
                                            }
                                        },
                                        "balanceCommitment": {
                                            "inner": "9E7bq1U2/arShvxznz6BdqhCayAenm05j9bv1Bg9wxA="
                                        },
                                        "wrappedMemoKey": "oGy/4eet3brucaxu1fMYLJXH+z9XHa9DMkQs1vO7YHB/+7Uywxe2q37v5M/jgail",
                                        "ovkWrappedKey": "0lLOT7fTyB0qJ/VDlc0d4RH6DQSqzafA7O01XRyutFMzjzqZ6/H0HjFZO+997DFL"
                                    },
                                    "proof": {
                                        "inner": "PFgyabElK/VahOh84/ezCrIamh/mdkewp42rUPeYgtCx2Lrug7e7FPDTm+LktQqBKKQN60fewOcMDxMxxRtMdESCEIJqzyK3Sg51kP/KGG1bjnyUB2jn0dIeLBLXJN0AZWk2q8UBSoV0p99PTGIYUQideHXFzVUMx4mMrUPJByWRRpYjxLXbpFeYQlvN5wWBKcoKEzN6PicRboprIQAaZ2zKWKtSmGKFUYH31efxPvFB2+nQCQ5VfePf7/G4ljcB"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "2004991813",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "The native token of Penumbra",
                                                "denomUnits": [
                                                    {
                                                        "denom": "penumbra",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "mpenumbra",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "upenumbra",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "upenumbra",
                                                "display": "penumbra",
                                                "name": "Penumbra",
                                                "symbol": "UM",
                                                "penumbraAssetId": {
                                                    "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "",
                                                        "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#c9a975",
                                                            "circle": false,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "999999999999",
                                                "badges": [],
                                                "coingeckoId": "penumbra"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "mnTQLSvNIwh8peP+5+UTKFeKQbweN0yp4p91qYIcLnw=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                },
                                "payloadKey": {
                                    "inner": "5Wp092nPjqd2ZTm8qftCOOLCa9NWGHuR1i7l+dOo5IE="
                                }
                            }
                        }
                    },
                    {
                        "undelegate": {
                            "validatorIdentity": {
                                "ik": "NAeSi/zd8bsMIoz3yMvVa4vru0OxCxBA/JrY54F0rgc="
                            },
                            "startEpochIndex": "0",
                            "unbondedAmount": {
                                "lo": "28606205",
                                "hi": "0"
                            },
                            "delegationAmount": {
                                "lo": "28000000",
                                "hi": "0"
                            },
                            "fromEpoch": {
                                "index": "170",
                                "startHeight": "4422822"
                            }
                        }
                    }
                ],
                "transactionParameters": {
                    "expiryHeight": "0",
                    "chainId": "penumbra-1",
                    "fee": {
                        "amount": {
                            "lo": "1445",
                            "hi": "0"
                        }
                    }
                },
                "detectionData": {
                    "fmdClues": [
                        {
                            "inner": "7OQ2/M/1jQW1sRodnF9Gm/UfTPyNobTBFao1fzdnQwRiPS/HEwND5fWc2cIQ4nhnGFjLOh9D4uJdn9UpNpaQAwAAAAA="
                        },
                        {
                            "inner": "FGG4t17tGhvPIVWUwxR0xhk258y7t0IE21Nm5CKh0QxJVSE9XTRjNcHoAVjFGvWNoNcITBSz0FbLzG22J/B6AgAAAAA="
                        },
                        {
                            "inner": "ZBME11OwF4kE1OfEpGNU4LtzKae1zhilS6/GMycuxwpdlFgauT/pFf0drUQIzr+xbvuFrCJdv7nqpHcZHrFeAQAAAAA="
                        }
                    ]
                },
                "memoView": {
                    "visible": {
                        "ciphertext": {
                            "inner": "GtbtImf1nx4VmObOG2hJWdkNyaZCazeQrnuIFPrSwpgfsCXje6W/T1meO3rDFlCP4qFHsq0hlSnqfDoXl/IMtvZ9b4lgBwDoRq2eHmj2RNtavNjaq3TDszmfF70xJy9rqHMoTGQwhpfK+NSuZSP6sHxio6e2dFYfvUxF3NGfhaZnYI/MBVwdUog701D3uyjYxNkaiIWO2LgeP+Q5OEqhhbhvPKvGVEGZF5k92cQA6UcUmSKsDxaUHTL/Hs9zpS3sDnzmaO6uY8323D4GfDmoYkhV7hGLrIT6lCJJ81an5FUHqgv6SEHLZ5eYPrUkUPaOWB1O8zXUpVAA6aHe4SFppE6vV9INo2pNLi88unG5kOaUBX02/Wd8gD+CLB4N12kzrKQIsYS4uziIBhDCcZ35glBxpYluaWwVdAc39HfdypVeKgVHYl8MogrwThBXDmKEI0UPWJ5d/ZsyukC+f0mIwSH3xaAQjEv/pMPpJIVDmxPCiKSGB3NO2vaGpMTmvM30pTTnCoVTuRzLwHKQ+D2XcuBpGZfCF4NnPz2PCw36BopTXvFjN+2IcOQH1RDV2YDAS0uJI+9QkXZLXnxHEHyjemnctcrAfa0qb/v4UTw6RyNIilTBEVSFHjXhxaoDAFUZf2nuRV01ugGNXp009HClgcEexm6b5U5EevQceSSl1yZPS39hVQGgvEN2RnRIoDwU"
                        },
                        "plaintext": {
                            "returnAddress": {
                                "decoded": {
                                    "address": {
                                        "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                        "altBech32m": ""
                                    },
                                    "index": {
                                        "account": 0,
                                        "randomizer": ""
                                    },
                                    "walletId": {
                                        "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                    }
                                }
                            },
                            "text": ""
                        }
                    }
                }
            },
            "bindingSig": {
                "inner": "+POzS14xxMuivecIoAfomZQlZPKjIBBiwKl5LXeRxA2UZXDvVLJu1XrzAYbZbaZdPLR+ZteN/dVe5q0wQaOFBA=="
            },
            "anchor": {
                "inner": "zhAH1oDzfP1xhOk13QBTUPKk/078vmPB0Zhd3gdVJAk="
            }
        },
        "summary": {
            "effects": [
                {
                    "address": {
                        "opaque": {
                            "address": {
                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                "altBech32m": ""
                            }
                        }
                    },
                    "balance": {
                        "values": [
                            {
                                "value": {
                                    "amount": {
                                        "lo": "28606205",
                                        "hi": "0"
                                    },
                                    "assetId": {
                                        "inner": "gSpLoUkuIcAAzwcA24ymgAGreRZCbZ9bUk0Yl352oAE=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    }
                                },
                                "negated": true
                            },
                            {
                                "value": {
                                    "amount": {
                                        "lo": "28000000",
                                        "hi": "0"
                                    },
                                    "assetId": {
                                        "inner": "Um2RXXeng0wMA+LHj8DOPqFr36veafb029EK+2ItAQk=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    }
                                },
                                "negated": false
                            },
                            {
                                "value": {
                                    "amount": {
                                        "lo": "1445",
                                        "hi": "0"
                                    },
                                    "assetId": {
                                        "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    }
                                },
                                "negated": false
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        "height": "4372871",
        "id": {
            "inner": "AXXW+lijdqLuVTTN132+6cmXc4hWt3Q3qeacuEQ5l+A="
        },
        "transaction": {
            "body": {
                "actions": [
                    {
                        "spend": {
                            "body": {
                                "balanceCommitment": {
                                    "inner": "GET4PUZFqc1LSSOyBF3RB33M0fJ1I5q9O6G35wFfBg8="
                                },
                                "rk": {
                                    "inner": "Gn0Stt9Ma2QpH2FLxOgLSy9oA7aOwTZanCDB5wSJsg4="
                                },
                                "nullifier": {
                                    "inner": "mP97zYrFelahPTE0woYFs2xDQEHbiTwnu0t/I5etFwk="
                                },
                                "encryptedBackref": "CWeO7cxzYt5A0VrOIoBHxO3BtYQfCTZ7F5RWUARlVv6n2gfhB5oHVO8ByHXoxqh1"
                            },
                            "authSig": {
                                "inner": "6sSytQV7n0asQhG2OoHovm6Ap5ToffwjNT69hpr32gTT50Uu+pd1vRAGJK3yvzhBJsweWC21/eHJ3n6fwhV6AQ=="
                            },
                            "proof": {
                                "inner": "C5GP5HKjSG2OSGc2D/5rbFVm9q37KJBkaG1HkqxxkHe0fqO31WsmHMZyY/+zGEcBW3VofS73FQGNNKFfgnJ/cv7V7Mj7Dmn0fSVUn5mGzj1C98O0/jJ02CKqnlwkehUAfCEWqywqsin54oPrqk62SNTq9DcxYlykBKJCp307BI5epNFb3J99Wm0HCAsw6nQBQa60+0ykhMmmyYR51WqpVlnz8iM7xLZ1Ibjj9q9swIU2lbxJncTXsKyCHZIzRrKA"
                            }
                        }
                    },
                    {
                        "spend": {
                            "body": {
                                "balanceCommitment": {
                                    "inner": "CKmZyNm5+iQUZJbm6EUT+GWEfTBQfn6rDE7QpEgkIgY="
                                },
                                "rk": {
                                    "inner": "2mGJHXgHyBPfaV5wOWEYo5PT7euxAulHkpVGN2LvVRI="
                                },
                                "nullifier": {
                                    "inner": "X0yzIxItYN4Ny6uRevXGrABWaRThSuOWseZAxgJGCQc="
                                },
                                "encryptedBackref": "WE+aMs7wrZQvr5guMsNkj0w/qy6i283j1MIJFR/Evw10pJYDPKga5wFPZto3E5DQ"
                            },
                            "authSig": {
                                "inner": "mJxRMypmhn7sGuDfDCoFuVb5104IAu0xHH4bB8xjAQBPj3x5dJubO2kY1qpoZ57+bOQSEsDP76yfX7+j2HcfAQ=="
                            },
                            "proof": {
                                "inner": "tvn/IjQRYRbl2Cu2xP3m4kQ7xcP6POkwnd1ELZgLr93X3sQtoM82y0xCtIeobl4AqpfRkaueLtt/XM+xustGdZ9FGKysjZOd883sk/EefEBGCB3EHt1psIeVFnZopwkAYlo9Loo/+613AEl4GdSEWxkv5j8ibfMwscapk3W+Fl2jjhMD/bvb+ePlqo4REmaBA8i0XZRvmUlni9ccpvD4NOxT36ZpIBx9IJ1g8XQ5XOf4YHmgc7p8+pqh+npcNE8B"
                            }
                        }
                    },
                    {
                        "output": {
                            "body": {
                                "notePayload": {
                                    "noteCommitment": {
                                        "inner": "hjigLB7jqxoENC9rCSen9LOjgFmig9PXmFvSLIOQNg8="
                                    },
                                    "ephemeralKey": "7pJf6oHfY6aV17g8pxuK6NfKA5ayycP74h6IAdhEugE=",
                                    "encryptedNote": {
                                        "inner": "hj2MgyQN0Aa3XRGvFWpY+XAnL38xLR8LQJv0GHLCpBc2n6FykDza1YnLmDbN1LheVlgF2euq23wIiJFG2TXqiywX8arBUQhLJ+obJqH9WXx+E7CF8Vti2MPHl+MN0saHkIxQ+Pe5xk51zzj72TFjHqtB3/s9t5ablL5zv5xBDggDNMHPdJPg0OgJDDXVWsPjpa4KysOSFyYYN0NdUc4e6tXK66XwbWoTIQzaRVTRPTM="
                                    }
                                },
                                "balanceCommitment": {
                                    "inner": "dFrOVrmk+NgNCuuT2jDJj4xf8kuF8D8lt5gqEYZK5BA="
                                },
                                "wrappedMemoKey": "Bu51PGzAxgzZtCFQKIPIRKAf/K4VlczlQfdkeF1cCIKv121G2zCUTgefdFs5+6Lq",
                                "ovkWrappedKey": "5G7DVJy16a4pAtblqY+LI+ryGB1lqnH5v14ev8JVJyQubP+5UTwwGviJ97YB8ore"
                            },
                            "proof": {
                                "inner": "Ux9DXpf4D7kG0Ztbg7wIlN9x++l6XnU/D3EJ7OeOYvaBcfgNQGX/qmy4qkXgPGgB1qZqQrPgz72yOhekTSjJR0c2f2TUJSlwI2+Dh1fvNrCAjVrkxfTEgYCoCBlcASAAEfjk6YMx3U53eNHr880LU4bwoVeQ1eY+GJd+iLlteTAqMrGmqJSNbcjrcB4faTkAhPlawqaATiusZt9n7Vh9f9+fEwU72rGdf9LZN6a3zWuXFPsrIWKv+S5L5RthOTcA"
                            }
                        }
                    },
                    {
                        "output": {
                            "body": {
                                "notePayload": {
                                    "noteCommitment": {
                                        "inner": "YaPeazDRW+YwPFG6pWMSLcPIQ/XU3EPrr65gHzzmlQw="
                                    },
                                    "ephemeralKey": "UOgn65Bg3gaRYiR59bmsujbm1+nduEIf5mnBuBSFnQs=",
                                    "encryptedNote": {
                                        "inner": "McZwNkDnvAxXcAZKC2yWSBrgNgMDzkV3DjHWdEzkBBEu9yRd3Eiw0P64/5l6/89XdUAzd9NhIKr5iMggx1BE10I1fxzIYsRCILG6EiWY354KR1nF4nfXXB3fN43R9FRciR13daYt93mRY+tubI6fcGSQ5Kplh4UrzFLwNu4FeH71lpeUH3EfSC4DP+srTgPFZME0dRsI73zmkc7+IT/UF7cBWTLiLTSXBwTsuoizoKg="
                                    }
                                },
                                "balanceCommitment": {
                                    "inner": "IICLoKiDnyNikxB0OhXrXT8VXg9O0YoJmzz6JjrEyAA="
                                },
                                "wrappedMemoKey": "uUE247KmVyE8GO04CbXkpzqkSMzRS6uRrZYZjLlZ/aWnJGFQKT/D1L3byJVTFKW1",
                                "ovkWrappedKey": "0yPO+5QLtLywgqc2tJwUab5zMpjjmucsCnt0zGTLBTj/q2BNOUNdcspNvN/Arhc5"
                            },
                            "proof": {
                                "inner": "4/1lKSY6MLf7dMR2XWUbNywzRr2EZhtS6l5tKYpoKctQANLZ3OPnAbgDAryrrlUAC8i3NF7ixiXIKJVBGzKW9SjGNIu2QAxmTUd7sfLlBaYTewSE5ldp5PTX5H4/OcwAOVePTm7MUEQSaKdiXk6rIlFdJ+z1Q4meGZeq+FqLOjPhxAHfU6GOSSBLzNU+tHkBiIUW6LWWmWSyiY3RKhZeZRstLFKjaE7qsckOUtz/aqqe+hpb4ANZDCmvCXTHSkGA"
                            }
                        }
                    }
                ],
                "transactionParameters": {
                    "expiryHeight": "0",
                    "chainId": "penumbra-1",
                    "fee": {
                        "amount": {
                            "lo": "1013",
                            "hi": "0"
                        }
                    }
                },
                "detectionData": {
                    "fmdClues": [
                        {
                            "inner": "rkX1wL+mGIdMOix+qhMj0QF5LloyraP1+MWcIjlNpxARcZ5bwGTJ2IxO8nSREfZLY4VAGHcnB+2ut7qG9XkPAgAAAAA="
                        },
                        {
                            "inner": "AP8A4GeT8E4PzkBtcxrEtNNB/E7iQGaHJluAFwkpAwKR46DXzx8rdeUHu42RxSymOKUdI1SbfnsPV81c6TIDAQAAAAA="
                        }
                    ]
                },
                "memo": {
                    "inner": "gOqBjCcS1JcsJ9G/IU1xpyyJVJ7kDAAvrxZBIz/3iRKSc/Ysx+mP/qfs796fV1h4w+FfEx8QY1sxuR1wH08LGK4lYlFiyaxpwyvJNpePh+ery6FU/watRyF5mDelbdeyQfyM6UUQFJqWXPMhi/fVF09s/UgebMd0F4OC0ycQIJgoYRVi5TaUM2qNNmVoyOSEAP0Gxq9fQYKsKUyTPc8UutgEFoIKq5HmyCZppZ7OTnyX9tNLUb6wyADnnwSnUcwSM1qvwei3AxaRAK1DAMexjOt4ksn2LZug7Yjjs8BCqP7h5fcg4EezMH/hT43kYZ3ICVyEIONFQ359cCsAeXEHzxnkdvJy2mVSPOOxxGD9r5nhwmTzJli/5Gy7jVhSFEnBI7h/9MPgCo6/n2tT+25MMYwLJ1Q9efjeMXRvTi1s9EBjr3bWG5O7KqgVZGEbST0Hq8v4ERLbVDq3whaop4gls67iGsHJCm8Tr8zgoYAZ5dUMNUzwD46JbRYWnCVEsfYcZkeaBsp2Rd3wBGiKMon0lBjmJCYV4nU91PvnMiiopuZPc3+TKcQ1Erx6bdeTtJgEHRAlHWIWtc04uwIe9mKSfQBUeMxuurBeMV9kr+BoJBOFti5qDTorV5ycmxAsGWoQIgUbwkqk5JBlZ3ERbOiNLJZEKPMcRbFPKF+cXnRO7rgApRK2NsbNCo2fzhOcc8dx"
                }
            },
            "bindingSig": {
                "inner": "mkgKUtZ6Sm5s1uxinQ2UEKI++REIVWciEcMOrlXcsgVoTJJT1X5DkBkERXf1qQwKJxuZm0aNZtZoBSZeUb1TAA=="
            },
            "anchor": {
                "inner": "b5a7cFu561bSe2+YJPSaNNBEDqLeqacahnwQL1xaKRI="
            }
        },
        "perspective": {
            "payloadKeys": [
                {
                    "payloadKey": {
                        "inner": "MMcgiI7I65wwDqWbjINT/oZYE7cm4nQNRBx90uiu1cI="
                    },
                    "commitment": {
                        "inner": "YaPeazDRW+YwPFG6pWMSLcPIQ/XU3EPrr65gHzzmlQw="
                    }
                },
                {
                    "payloadKey": {
                        "inner": "r0OI1RZC1YyNEFJYJS0pfY7AHEmX2vA35wzOjzj3CaM="
                    },
                    "commitment": {
                        "inner": "hjigLB7jqxoENC9rCSen9LOjgFmig9PXmFvSLIOQNg8="
                    }
                }
            ],
            "spendNullifiers": [
                {
                    "nullifier": {
                        "inner": "X0yzIxItYN4Ny6uRevXGrABWaRThSuOWseZAxgJGCQc="
                    },
                    "note": {
                        "value": {
                            "amount": {
                                "lo": "2004994271",
                                "hi": "0"
                            },
                            "assetId": {
                                "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                "altBech32m": "",
                                "altBaseDenom": ""
                            }
                        },
                        "rseed": "Imrv4wDXE07cZZrafMFt3OfgG/vw5wZpPI6QA83djwQ=",
                        "address": {
                            "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                            "altBech32m": ""
                        }
                    }
                },
                {
                    "nullifier": {
                        "inner": "mP97zYrFelahPTE0woYFs2xDQEHbiTwnu0t/I5etFwk="
                    },
                    "note": {
                        "value": {
                            "amount": {
                                "lo": "1100000000",
                                "hi": "0"
                            },
                            "assetId": {
                                "inner": "drPksQaBNYwSOzgfkGOEdrd4kEDkeALeh58Ps+7cjQs=",
                                "altBech32m": "",
                                "altBaseDenom": ""
                            }
                        },
                        "rseed": "qvdxTLRA3gaOn1TzEbxL0bnIvGKTHRQhlL1ra/Kf3tU=",
                        "address": {
                            "inner": "lJCN/loDAwzpZMoPB2eE20rNCB/ZvDsEyA6Mow/Tr1yGtlJvx79wAv1yjD33IG0RiFE4B8NxXeRtw1mb4GML5P5n3BTRLitrNQI8OhbAoJg=",
                            "altBech32m": ""
                        }
                    }
                }
            ],
            "adviceNotes": [],
            "addressViews": [
                {
                    "opaque": {
                        "address": {
                            "inner": "jZwzLCcSaO/MiKw3MFCXBcRiQavU1yVRqXoyBRnMre6YOzEeHnUJAkxzzi/k1TZMsXAZ9lLM88YoBZKXIM5azqQU24wmKS4g4cAQHmXoZRQ=",
                            "altBech32m": ""
                        }
                    }
                },
                {
                    "decoded": {
                        "address": {
                            "inner": "lJCN/loDAwzpZMoPB2eE20rNCB/ZvDsEyA6Mow/Tr1yGtlJvx79wAv1yjD33IG0RiFE4B8NxXeRtw1mb4GML5P5n3BTRLitrNQI8OhbAoJg=",
                            "altBech32m": ""
                        },
                        "index": {
                            "account": 0,
                            "randomizer": "DuwL10996B6Y3Se5"
                        },
                        "walletId": {
                            "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                        }
                    }
                },
                {
                    "decoded": {
                        "address": {
                            "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                            "altBech32m": ""
                        },
                        "index": {
                            "account": 0,
                            "randomizer": ""
                        },
                        "walletId": {
                            "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                        }
                    }
                }
            ],
            "denoms": [
                {
                    "description": "USD Coin",
                    "denomUnits": [
                        {
                            "denom": "transfer/channel-2/uusdc",
                            "exponent": 0,
                            "aliases": []
                        },
                        {
                            "denom": "transfer/channel-2/usdc",
                            "exponent": 6,
                            "aliases": []
                        }
                    ],
                    "base": "transfer/channel-2/uusdc",
                    "display": "transfer/channel-2/usdc",
                    "name": "USDC",
                    "symbol": "USDC",
                    "penumbraAssetId": {
                        "inner": "drPksQaBNYwSOzgfkGOEdrd4kEDkeALeh58Ps+7cjQs=",
                        "altBech32m": "",
                        "altBaseDenom": ""
                    },
                    "images": [
                        {
                            "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png",
                            "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg",
                            "theme": {
                                "primaryColorHex": "#2775CA",
                                "circle": true,
                                "darkMode": false
                            }
                        }
                    ],
                    "priorityScore": "800000000100",
                    "badges": [],
                    "coingeckoId": "usd-coin"
                },
                {
                    "description": "The native token of Penumbra",
                    "denomUnits": [
                        {
                            "denom": "penumbra",
                            "exponent": 6,
                            "aliases": []
                        },
                        {
                            "denom": "mpenumbra",
                            "exponent": 3,
                            "aliases": []
                        },
                        {
                            "denom": "upenumbra",
                            "exponent": 0,
                            "aliases": []
                        }
                    ],
                    "base": "upenumbra",
                    "display": "penumbra",
                    "name": "Penumbra",
                    "symbol": "UM",
                    "penumbraAssetId": {
                        "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                        "altBech32m": "",
                        "altBaseDenom": ""
                    },
                    "images": [
                        {
                            "png": "",
                            "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                            "theme": {
                                "primaryColorHex": "#c9a975",
                                "circle": false,
                                "darkMode": false
                            }
                        }
                    ],
                    "priorityScore": "999999999999",
                    "badges": [],
                    "coingeckoId": "penumbra"
                }
            ],
            "transactionId": {
                "inner": "AXXW+lijdqLuVTTN132+6cmXc4hWt3Q3qeacuEQ5l+A="
            },
            "prices": [],
            "extendedMetadata": [],
            "creationTransactionIdsByNullifier": [],
            "nullificationTransactionIdsByCommitment": [],
            "batchSwapOutputData": []
        },
        "view": {
            "bodyView": {
                "actionViews": [
                    {
                        "spend": {
                            "visible": {
                                "spend": {
                                    "body": {
                                        "balanceCommitment": {
                                            "inner": "GET4PUZFqc1LSSOyBF3RB33M0fJ1I5q9O6G35wFfBg8="
                                        },
                                        "rk": {
                                            "inner": "Gn0Stt9Ma2QpH2FLxOgLSy9oA7aOwTZanCDB5wSJsg4="
                                        },
                                        "nullifier": {
                                            "inner": "mP97zYrFelahPTE0woYFs2xDQEHbiTwnu0t/I5etFwk="
                                        },
                                        "encryptedBackref": "CWeO7cxzYt5A0VrOIoBHxO3BtYQfCTZ7F5RWUARlVv6n2gfhB5oHVO8ByHXoxqh1"
                                    },
                                    "authSig": {
                                        "inner": "6sSytQV7n0asQhG2OoHovm6Ap5ToffwjNT69hpr32gTT50Uu+pd1vRAGJK3yvzhBJsweWC21/eHJ3n6fwhV6AQ=="
                                    },
                                    "proof": {
                                        "inner": "C5GP5HKjSG2OSGc2D/5rbFVm9q37KJBkaG1HkqxxkHe0fqO31WsmHMZyY/+zGEcBW3VofS73FQGNNKFfgnJ/cv7V7Mj7Dmn0fSVUn5mGzj1C98O0/jJ02CKqnlwkehUAfCEWqywqsin54oPrqk62SNTq9DcxYlykBKJCp307BI5epNFb3J99Wm0HCAsw6nQBQa60+0ykhMmmyYR51WqpVlnz8iM7xLZ1Ibjj9q9swIU2lbxJncTXsKyCHZIzRrKA"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "1100000000",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "USD Coin",
                                                "denomUnits": [
                                                    {
                                                        "denom": "transfer/channel-2/uusdc",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "transfer/channel-2/usdc",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "transfer/channel-2/uusdc",
                                                "display": "transfer/channel-2/usdc",
                                                "name": "USDC",
                                                "symbol": "USDC",
                                                "penumbraAssetId": {
                                                    "inner": "drPksQaBNYwSOzgfkGOEdrd4kEDkeALeh58Ps+7cjQs=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png",
                                                        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#2775CA",
                                                            "circle": true,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "800000000100",
                                                "badges": [],
                                                "coingeckoId": "usd-coin"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "qvdxTLRA3gaOn1TzEbxL0bnIvGKTHRQhlL1ra/Kf3tU=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "lJCN/loDAwzpZMoPB2eE20rNCB/ZvDsEyA6Mow/Tr1yGtlJvx79wAv1yjD33IG0RiFE4B8NxXeRtw1mb4GML5P5n3BTRLitrNQI8OhbAoJg=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": "DuwL10996B6Y3Se5"
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    {
                        "spend": {
                            "visible": {
                                "spend": {
                                    "body": {
                                        "balanceCommitment": {
                                            "inner": "CKmZyNm5+iQUZJbm6EUT+GWEfTBQfn6rDE7QpEgkIgY="
                                        },
                                        "rk": {
                                            "inner": "2mGJHXgHyBPfaV5wOWEYo5PT7euxAulHkpVGN2LvVRI="
                                        },
                                        "nullifier": {
                                            "inner": "X0yzIxItYN4Ny6uRevXGrABWaRThSuOWseZAxgJGCQc="
                                        },
                                        "encryptedBackref": "WE+aMs7wrZQvr5guMsNkj0w/qy6i283j1MIJFR/Evw10pJYDPKga5wFPZto3E5DQ"
                                    },
                                    "authSig": {
                                        "inner": "mJxRMypmhn7sGuDfDCoFuVb5104IAu0xHH4bB8xjAQBPj3x5dJubO2kY1qpoZ57+bOQSEsDP76yfX7+j2HcfAQ=="
                                    },
                                    "proof": {
                                        "inner": "tvn/IjQRYRbl2Cu2xP3m4kQ7xcP6POkwnd1ELZgLr93X3sQtoM82y0xCtIeobl4AqpfRkaueLtt/XM+xustGdZ9FGKysjZOd883sk/EefEBGCB3EHt1psIeVFnZopwkAYlo9Loo/+613AEl4GdSEWxkv5j8ibfMwscapk3W+Fl2jjhMD/bvb+ePlqo4REmaBA8i0XZRvmUlni9ccpvD4NOxT36ZpIBx9IJ1g8XQ5XOf4YHmgc7p8+pqh+npcNE8B"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "2004994271",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "The native token of Penumbra",
                                                "denomUnits": [
                                                    {
                                                        "denom": "penumbra",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "mpenumbra",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "upenumbra",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "upenumbra",
                                                "display": "penumbra",
                                                "name": "Penumbra",
                                                "symbol": "UM",
                                                "penumbraAssetId": {
                                                    "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "",
                                                        "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#c9a975",
                                                            "circle": false,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "999999999999",
                                                "badges": [],
                                                "coingeckoId": "penumbra"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "Imrv4wDXE07cZZrafMFt3OfgG/vw5wZpPI6QA83djwQ=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    {
                        "output": {
                            "visible": {
                                "output": {
                                    "body": {
                                        "notePayload": {
                                            "noteCommitment": {
                                                "inner": "hjigLB7jqxoENC9rCSen9LOjgFmig9PXmFvSLIOQNg8="
                                            },
                                            "ephemeralKey": "7pJf6oHfY6aV17g8pxuK6NfKA5ayycP74h6IAdhEugE=",
                                            "encryptedNote": {
                                                "inner": "hj2MgyQN0Aa3XRGvFWpY+XAnL38xLR8LQJv0GHLCpBc2n6FykDza1YnLmDbN1LheVlgF2euq23wIiJFG2TXqiywX8arBUQhLJ+obJqH9WXx+E7CF8Vti2MPHl+MN0saHkIxQ+Pe5xk51zzj72TFjHqtB3/s9t5ablL5zv5xBDggDNMHPdJPg0OgJDDXVWsPjpa4KysOSFyYYN0NdUc4e6tXK66XwbWoTIQzaRVTRPTM="
                                            }
                                        },
                                        "balanceCommitment": {
                                            "inner": "dFrOVrmk+NgNCuuT2jDJj4xf8kuF8D8lt5gqEYZK5BA="
                                        },
                                        "wrappedMemoKey": "Bu51PGzAxgzZtCFQKIPIRKAf/K4VlczlQfdkeF1cCIKv121G2zCUTgefdFs5+6Lq",
                                        "ovkWrappedKey": "5G7DVJy16a4pAtblqY+LI+ryGB1lqnH5v14ev8JVJyQubP+5UTwwGviJ97YB8ore"
                                    },
                                    "proof": {
                                        "inner": "Ux9DXpf4D7kG0Ztbg7wIlN9x++l6XnU/D3EJ7OeOYvaBcfgNQGX/qmy4qkXgPGgB1qZqQrPgz72yOhekTSjJR0c2f2TUJSlwI2+Dh1fvNrCAjVrkxfTEgYCoCBlcASAAEfjk6YMx3U53eNHr880LU4bwoVeQ1eY+GJd+iLlteTAqMrGmqJSNbcjrcB4faTkAhPlawqaATiusZt9n7Vh9f9+fEwU72rGdf9LZN6a3zWuXFPsrIWKv+S5L5RthOTcA"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "1100000000",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "USD Coin",
                                                "denomUnits": [
                                                    {
                                                        "denom": "transfer/channel-2/uusdc",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "transfer/channel-2/usdc",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "transfer/channel-2/uusdc",
                                                "display": "transfer/channel-2/usdc",
                                                "name": "USDC",
                                                "symbol": "USDC",
                                                "penumbraAssetId": {
                                                    "inner": "drPksQaBNYwSOzgfkGOEdrd4kEDkeALeh58Ps+7cjQs=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.png",
                                                        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdc.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#2775CA",
                                                            "circle": true,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "800000000100",
                                                "badges": [],
                                                "coingeckoId": "usd-coin"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "OCiJzpG+GYWUIdgPOMX7yWqSpw3dUx56I2BPrvuyOm8=",
                                    "address": {
                                        "opaque": {
                                            "address": {
                                                "inner": "jZwzLCcSaO/MiKw3MFCXBcRiQavU1yVRqXoyBRnMre6YOzEeHnUJAkxzzi/k1TZMsXAZ9lLM88YoBZKXIM5azqQU24wmKS4g4cAQHmXoZRQ=",
                                                "altBech32m": ""
                                            }
                                        }
                                    }
                                },
                                "payloadKey": {
                                    "inner": "2nWtKKAIEaa4hOBYEB9klW7YPG4yzGNeslcfODJTmwI="
                                }
                            }
                        }
                    },
                    {
                        "output": {
                            "visible": {
                                "output": {
                                    "body": {
                                        "notePayload": {
                                            "noteCommitment": {
                                                "inner": "YaPeazDRW+YwPFG6pWMSLcPIQ/XU3EPrr65gHzzmlQw="
                                            },
                                            "ephemeralKey": "UOgn65Bg3gaRYiR59bmsujbm1+nduEIf5mnBuBSFnQs=",
                                            "encryptedNote": {
                                                "inner": "McZwNkDnvAxXcAZKC2yWSBrgNgMDzkV3DjHWdEzkBBEu9yRd3Eiw0P64/5l6/89XdUAzd9NhIKr5iMggx1BE10I1fxzIYsRCILG6EiWY354KR1nF4nfXXB3fN43R9FRciR13daYt93mRY+tubI6fcGSQ5Kplh4UrzFLwNu4FeH71lpeUH3EfSC4DP+srTgPFZME0dRsI73zmkc7+IT/UF7cBWTLiLTSXBwTsuoizoKg="
                                            }
                                        },
                                        "balanceCommitment": {
                                            "inner": "IICLoKiDnyNikxB0OhXrXT8VXg9O0YoJmzz6JjrEyAA="
                                        },
                                        "wrappedMemoKey": "uUE247KmVyE8GO04CbXkpzqkSMzRS6uRrZYZjLlZ/aWnJGFQKT/D1L3byJVTFKW1",
                                        "ovkWrappedKey": "0yPO+5QLtLywgqc2tJwUab5zMpjjmucsCnt0zGTLBTj/q2BNOUNdcspNvN/Arhc5"
                                    },
                                    "proof": {
                                        "inner": "4/1lKSY6MLf7dMR2XWUbNywzRr2EZhtS6l5tKYpoKctQANLZ3OPnAbgDAryrrlUAC8i3NF7ixiXIKJVBGzKW9SjGNIu2QAxmTUd7sfLlBaYTewSE5ldp5PTX5H4/OcwAOVePTm7MUEQSaKdiXk6rIlFdJ+z1Q4meGZeq+FqLOjPhxAHfU6GOSSBLzNU+tHkBiIUW6LWWmWSyiY3RKhZeZRstLFKjaE7qsckOUtz/aqqe+hpb4ANZDCmvCXTHSkGA"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "2004993258",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "The native token of Penumbra",
                                                "denomUnits": [
                                                    {
                                                        "denom": "penumbra",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "mpenumbra",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "upenumbra",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "upenumbra",
                                                "display": "penumbra",
                                                "name": "Penumbra",
                                                "symbol": "UM",
                                                "penumbraAssetId": {
                                                    "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "",
                                                        "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#c9a975",
                                                            "circle": false,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "999999999999",
                                                "badges": [],
                                                "coingeckoId": "penumbra"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "s6KfakIOzdoX0r8+wEsEKBtoZ/DMBzOBW3HM3fQ1xkk=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                },
                                "payloadKey": {
                                    "inner": "2nWtKKAIEaa4hOBYEB9klW7YPG4yzGNeslcfODJTmwI="
                                }
                            }
                        }
                    }
                ],
                "transactionParameters": {
                    "expiryHeight": "0",
                    "chainId": "penumbra-1",
                    "fee": {
                        "amount": {
                            "lo": "1013",
                            "hi": "0"
                        }
                    }
                },
                "detectionData": {
                    "fmdClues": [
                        {
                            "inner": "rkX1wL+mGIdMOix+qhMj0QF5LloyraP1+MWcIjlNpxARcZ5bwGTJ2IxO8nSREfZLY4VAGHcnB+2ut7qG9XkPAgAAAAA="
                        },
                        {
                            "inner": "AP8A4GeT8E4PzkBtcxrEtNNB/E7iQGaHJluAFwkpAwKR46DXzx8rdeUHu42RxSymOKUdI1SbfnsPV81c6TIDAQAAAAA="
                        }
                    ]
                },
                "memoView": {
                    "visible": {
                        "ciphertext": {
                            "inner": "gOqBjCcS1JcsJ9G/IU1xpyyJVJ7kDAAvrxZBIz/3iRKSc/Ysx+mP/qfs796fV1h4w+FfEx8QY1sxuR1wH08LGK4lYlFiyaxpwyvJNpePh+ery6FU/watRyF5mDelbdeyQfyM6UUQFJqWXPMhi/fVF09s/UgebMd0F4OC0ycQIJgoYRVi5TaUM2qNNmVoyOSEAP0Gxq9fQYKsKUyTPc8UutgEFoIKq5HmyCZppZ7OTnyX9tNLUb6wyADnnwSnUcwSM1qvwei3AxaRAK1DAMexjOt4ksn2LZug7Yjjs8BCqP7h5fcg4EezMH/hT43kYZ3ICVyEIONFQ359cCsAeXEHzxnkdvJy2mVSPOOxxGD9r5nhwmTzJli/5Gy7jVhSFEnBI7h/9MPgCo6/n2tT+25MMYwLJ1Q9efjeMXRvTi1s9EBjr3bWG5O7KqgVZGEbST0Hq8v4ERLbVDq3whaop4gls67iGsHJCm8Tr8zgoYAZ5dUMNUzwD46JbRYWnCVEsfYcZkeaBsp2Rd3wBGiKMon0lBjmJCYV4nU91PvnMiiopuZPc3+TKcQ1Erx6bdeTtJgEHRAlHWIWtc04uwIe9mKSfQBUeMxuurBeMV9kr+BoJBOFti5qDTorV5ycmxAsGWoQIgUbwkqk5JBlZ3ERbOiNLJZEKPMcRbFPKF+cXnRO7rgApRK2NsbNCo2fzhOcc8dx"
                        },
                        "plaintext": {
                            "returnAddress": {
                                "decoded": {
                                    "address": {
                                        "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                        "altBech32m": ""
                                    },
                                    "index": {
                                        "account": 0,
                                        "randomizer": ""
                                    },
                                    "walletId": {
                                        "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                    }
                                }
                            },
                            "text": ""
                        }
                    }
                }
            },
            "bindingSig": {
                "inner": "mkgKUtZ6Sm5s1uxinQ2UEKI++REIVWciEcMOrlXcsgVoTJJT1X5DkBkERXf1qQwKJxuZm0aNZtZoBSZeUb1TAA=="
            },
            "anchor": {
                "inner": "b5a7cFu561bSe2+YJPSaNNBEDqLeqacahnwQL1xaKRI="
            }
        },
        "summary": {
            "effects": [
                {
                    "address": {
                        "opaque": {
                            "address": {
                                "inner": "jZwzLCcSaO/MiKw3MFCXBcRiQavU1yVRqXoyBRnMre6YOzEeHnUJAkxzzi/k1TZMsXAZ9lLM88YoBZKXIM5azqQU24wmKS4g4cAQHmXoZRQ=",
                                "altBech32m": ""
                            }
                        }
                    },
                    "balance": {
                        "values": [
                            {
                                "value": {
                                    "amount": {
                                        "lo": "1100000000",
                                        "hi": "0"
                                    },
                                    "assetId": {
                                        "inner": "drPksQaBNYwSOzgfkGOEdrd4kEDkeALeh58Ps+7cjQs=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    }
                                },
                                "negated": true
                            }
                        ]
                    }
                },
                {
                    "address": {
                        "opaque": {
                            "address": {
                                "inner": "lJCN/loDAwzpZMoPB2eE20rNCB/ZvDsEyA6Mow/Tr1yGtlJvx79wAv1yjD33IG0RiFE4B8NxXeRtw1mb4GML5P5n3BTRLitrNQI8OhbAoJg=",
                                "altBech32m": ""
                            }
                        }
                    },
                    "balance": {
                        "values": [
                            {
                                "value": {
                                    "amount": {
                                        "lo": "1100000000",
                                        "hi": "0"
                                    },
                                    "assetId": {
                                        "inner": "drPksQaBNYwSOzgfkGOEdrd4kEDkeALeh58Ps+7cjQs=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    }
                                },
                                "negated": false
                            }
                        ]
                    }
                },
                {
                    "address": {
                        "opaque": {
                            "address": {
                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                "altBech32m": ""
                            }
                        }
                    },
                    "balance": {
                        "values": [
                            {
                                "value": {
                                    "amount": {
                                        "lo": "1013",
                                        "hi": "0"
                                    },
                                    "assetId": {
                                        "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    }
                                },
                                "negated": false
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        "height": "4345655",
        "id": {
            "inner": "UIh/687Q1CFTlmffTAXQ+BGGnrAMSDBhJKCTeujENGk="
        },
        "transaction": {
            "body": {
                "actions": [
                    {
                        "spend": {
                            "body": {
                                "balanceCommitment": {
                                    "inner": "9JKn4xLUCnuSDlroL91/+KuHPNRlHcCvj2jwah7nNhA="
                                },
                                "rk": {
                                    "inner": "4jhTc7nxSO9gEaQa+se3DqQIWzLz+axUf6DOsR7i0Qw="
                                },
                                "nullifier": {
                                    "inner": "Kx9LZXtjCtZdmGa8xPyj6GZYNZZMhVRsP8cxV+jsKxE="
                                },
                                "encryptedBackref": "GfyJa1lgg5t8fMfNTtUGLpm2+Gx6O67RLs8bKhRBRXX0GOj0msoi44y8lc24Ejw4"
                            },
                            "authSig": {
                                "inner": "zhFzsXZFhDVYDTUlFP3SWHHWEz7rMq6SwDdUo9LC3gC+soFyX79Xu6mslPkn4JWMOtmaVATqe/oKQV14fx+2AQ=="
                            },
                            "proof": {
                                "inner": "7lyBTMJEGNTM1lcoT2nvq/fELCRB+vfv3O3jiJZDXnIwTSMNL2Pml9X6J08p2d8AWGDPiMWtPk4jKBRgELTO4LUOaK3DLeIh+lEARy2Lq7vbn38Zs611c6i5QShvEaMB7sQjVIO8DlAvrus0GsCC7j9R4S9RVOwWmU4Gp/FHwepKNddC7yp0gZRqSbz+rBsBQSPyGEvAWBEl8FpS9kqJLTvNjC2RZPwvPfelRlcBn1znwmBnCKjz0klQtwiFo1iB"
                            }
                        }
                    },
                    {
                        "output": {
                            "body": {
                                "notePayload": {
                                    "noteCommitment": {
                                        "inner": "ApHULjMvLI+FrHkLIKY8OkpT8W6delnvoi1/QrUUHxI="
                                    },
                                    "ephemeralKey": "fl4gaithcKXsgdXmqbcnVIMvb0XAarOt6Di9LDh8xQE=",
                                    "encryptedNote": {
                                        "inner": "ZK3M/7YlMcWwV5TtR4aCIA8ri3ixUaiGM8My4Kh6DPr0Zs+q+XxjD3I5gYm/yH0HrTYPS2iuDGRbDP1VRyLISo3qtZg7KnjMtng+N4weozPCiXyszOJWrmfcRAVtiS7W+PAYORSFOfS0mR/Rw7a2wf9O8ZL7a+9md1z2L1Fc8K15yKtEN1DkQtsik22zJXaFWjIRPaMmqy8TlExE2rTWM++e0JumPKBAUbz3Mgo3BcY="
                                    }
                                },
                                "balanceCommitment": {
                                    "inner": "TJ6YPGNrseBAmaIb0xiYARrULDzd2iArqNdH4rFqdQo="
                                },
                                "wrappedMemoKey": "usaEyrtbCTpBovi+FN0NqfUlVKM96ocibW3Wa7mCzN90lbdimS/leRmxVRMuo9Pw",
                                "ovkWrappedKey": "HK5xBN30aNrAIdRwosByfGBYpND+NOoOFo3Y/rJ4JbIF4XEKxswyOMPHc1Z3DHtg"
                            },
                            "proof": {
                                "inner": "kQNju2wzw1szio0bva/EIyYtbntjIVjjXpT/SYyCSduaSsM2UgezDjtu/Gpp2pEAgO9vw1vlvkmqChejC/Fyrw3TRxlrLKCee6GzW9fgNYZzXrFRvq22Kuko/1NsKRMBo/lkK81Xt5L6wntAKG/plLOFAUHrdF/are8vnsi6dBDJwjIEw/fVEXFO3v/Q6qqAyXbRsoR5+ptxmAhQfR5sKTUqcGqPDynmuR5JI6zxYUcvcgHAPsRh6yHP7D5Z0bkA"
                            }
                        }
                    },
                    {
                        "output": {
                            "body": {
                                "notePayload": {
                                    "noteCommitment": {
                                        "inner": "M1EiwYSYEbny2/KC0pytXYL42Sy2ZKKpaAqLkMd/Cgk="
                                    },
                                    "ephemeralKey": "DLmsyeV5viI3aPDE+RNrTDNQGv+PvmpREL9bAwDUlBI=",
                                    "encryptedNote": {
                                        "inner": "7kGdsO5ZnlyVeEAvMPQ622Z1wnemeYozppuiZdf9BFDgwv49JeJhxhEMugztBvrrOtXilrExj5P4/y1DqJhNqdNhZ8JMIMuvyV7W1V0hTHF+PPe/y8440A6wZSt1bMpvVIETLYqhKxYU0qqoXuh64jzpohZFmPraG9Wse+Cdp1eXLLDWBJR/ymVgkhXO66K9zhTKMBP44UlTH3VbtuZCpw3gortHWp16qWi4dBhq3fg="
                                    }
                                },
                                "balanceCommitment": {
                                    "inner": "LsDuh3T2MFnPsYNPhGzbk0RytjTZ0R8VoVVRHIvgqAY="
                                },
                                "wrappedMemoKey": "o3JDYMni6eh70ZUiTfwNx/NeAmnZJYI8nkMZ5juYsUClAFalrFy+niEzymkwl00Q",
                                "ovkWrappedKey": "sSnJ0L1VjP+lmVMh+YAY/C+cJvYjNGDTn6U5kQgzechdG1gXdNHTw3hGdyozcpYS"
                            },
                            "proof": {
                                "inner": "bz7dEoRJZu5mnWDPp2GGhz9JjDb5bgcBWHANAKT7bAgxiheWSlvHcje8lG/lNaCB9aQcz8jQe73HW01FU2OyInb2l95ResXFgFk09i0PYfoQlG3S1cc/v8QH+l/E0FYAh0RrYX7ERdZul6Ssa8qQ7524wYYFe5EwlWeSO7LFtMcR466CrHkLzIjEFU3ShDsAHnBoCqOHkb1XnSYNIyC8LudbrEU/WtDepM1ZP4D7T7nAL+IWwtT7tGfs85nAJHcB"
                            }
                        }
                    },
                    {
                        "delegatorVote": {
                            "body": {
                                "proposal": "5",
                                "startPosition": "697381158912",
                                "vote": {
                                    "vote": "VOTE_YES"
                                },
                                "value": {
                                    "amount": {
                                        "lo": "68604594",
                                        "hi": "0"
                                    },
                                    "assetId": {
                                        "inner": "Um2RXXeng0wMA+LHj8DOPqFr36veafb029EK+2ItAQk=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    }
                                },
                                "unbondedAmount": {
                                    "lo": "70058933",
                                    "hi": "0"
                                },
                                "nullifier": {
                                    "inner": "lC5qcWc2yLuT9bqk8eOVD+lEAK3kvX35O6sLv3KrnAk="
                                },
                                "rk": {
                                    "inner": "hBRf1AuYK7uQM30hvBVcKdTv/L0rJNx1FClmvkuSPQw="
                                }
                            },
                            "authSig": {
                                "inner": "mqLJpoAPQ3adqAg4xTEAjUYYKnExdY6lGk1OZFvB0wjojo1Lr/HMYAiKGCVObNPwPAvDmQbbkuzJT3M8m1BvBA=="
                            },
                            "proof": {
                                "inner": "iz/APBkVOKGVpCroAcDiVZKgPAEJAyTaznhJP/PNjv/uxN5AHIHa8YpWNKPVjVKBliNvI+VT0RMNniEmxnASlsnPoJE3Gzfq/x/16133UKzSdBYJmoAUm364Ho7cLBUBXn5NWwt9igmIfXfrnDM5ihMwh475XGHh57Sk2TI0q4xOWS6031f7sN0J6YlhXE8A1S+E/1x9rhR7lsziG6joEh/eldsDWHnPeYQIkvU1bZlF9fJzebdqnmnAy0rR/mgA"
                            }
                        }
                    }
                ],
                "transactionParameters": {
                    "expiryHeight": "0",
                    "chainId": "penumbra-1",
                    "fee": {
                        "amount": {
                            "lo": "960",
                            "hi": "0"
                        }
                    }
                },
                "detectionData": {
                    "fmdClues": [
                        {
                            "inner": "XrOyKo1QDM2Fh77jYEfSvUnR/UVlTXUFZw2D3lD3HRFvpPQRNl9exAU0SWVbiSoz5N0BCmSP638HmDG91xzsAgAAAAA="
                        },
                        {
                            "inner": "sm5HIpF39cwi+OgNxxJVzv05ySX7YZ1fRXvp6IbI8QWYw7+JAQtrLOrobFypV6bf2z87FXiEPDSHpjGFPxfRAAAAAAA="
                        }
                    ]
                },
                "memo": {
                    "inner": "dcklvlUz4ASwD/Lrm4YjDpk9yKNUjGd0gQymFDHw4nmJBOTPQA2hdCGuZuP4IlxWUj3U8TY63D4vRyW2yMHqveUNt311tX/sJxd/ubLOHhd1bypnLQULVyuSnxR0VDLvZNroLaamGin736N8kppOjnfDRv0O9OijocHCvKzhgwUWndCfqVlpst7gtmFqmxdfiGD8XJTYGtFp9Cl7wjN5hYXM59tBtToRJ/XpuAIDcRJETZ/newKDDcORvZvRvElEHee11L2r0yb+61uaG/14piSAXFwuvpv/cbEf71v+r6av+ok4+593CQREkiM9a5EJSKbZpt5qfviG/8MA8ps+fpPTE3bRXY3uEGUJxDjbdZx//UoJIF2UoBhpZsOCq32H75jDXNW3DzL78zWUfxjwSeu7NVIC/hlbvV8CsRvsmm+fNCZoYF874cOyRqTa1Wfcs6sekw7021ROU6Bdip2wFiR7N81/k7GLL0YnNED1q/LGCDj5r7uBXS98gcqa2gd2JaSWHEHRCS44w9ZwDDJ0Q7/OJ6nJ0idevGq4fSSBcfTKeIYXD3smsOsr+302jIVWIlFSs27vuRnT7Y8A1iqGwd2YwpcxyFYZqVz7Uwib4xynML5XlOsxO3Uh0obP0IZDZfEx7aNv6KIbPJtGvt1KcZmIWpYKg5hiXC/4nUEIBgH+LvCauMAV2hFYfxoAifUo"
                }
            },
            "bindingSig": {
                "inner": "qK0HRmw8d8DUF7ZE9+xeSEA+sWDE8ovUuAIEBYScFhA+UutSDYvIYIaBh338jgM+e+u8CBCi0jS0Fo68CoSfAA=="
            },
            "anchor": {
                "inner": "hIndIJKxZ9tlaZf/ry47qwfr5r7f/Rqdlmwmp4lrngI="
            }
        },
        "perspective": {
            "payloadKeys": [
                {
                    "payloadKey": {
                        "inner": "lIdOtdp+qUZ2GXVKoCrTuEQmkVJylFgTRYD9QG19Cok="
                    },
                    "commitment": {
                        "inner": "M1EiwYSYEbny2/KC0pytXYL42Sy2ZKKpaAqLkMd/Cgk="
                    }
                },
                {
                    "payloadKey": {
                        "inner": "pawPtw8Ys28DlW0wzGxswy6hmNB4ZuRfnRC7GAMlVTQ="
                    },
                    "commitment": {
                        "inner": "ApHULjMvLI+FrHkLIKY8OkpT8W6delnvoi1/QrUUHxI="
                    }
                }
            ],
            "spendNullifiers": [
                {
                    "nullifier": {
                        "inner": "lC5qcWc2yLuT9bqk8eOVD+lEAK3kvX35O6sLv3KrnAk="
                    },
                    "note": {
                        "value": {
                            "amount": {
                                "lo": "68604594",
                                "hi": "0"
                            },
                            "assetId": {
                                "inner": "Um2RXXeng0wMA+LHj8DOPqFr36veafb029EK+2ItAQk=",
                                "altBech32m": "",
                                "altBaseDenom": ""
                            }
                        },
                        "rseed": "y+q0oqOm3n6c1AYMaJ0ibkVnBoTGbbUpFhbt/mEUT2o=",
                        "address": {
                            "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                            "altBech32m": ""
                        }
                    }
                },
                {
                    "nullifier": {
                        "inner": "Kx9LZXtjCtZdmGa8xPyj6GZYNZZMhVRsP8cxV+jsKxE="
                    },
                    "note": {
                        "value": {
                            "amount": {
                                "lo": "2004995231",
                                "hi": "0"
                            },
                            "assetId": {
                                "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                "altBech32m": "",
                                "altBaseDenom": ""
                            }
                        },
                        "rseed": "fQsEbLqAiwi+/IK6vpHAt36jQpX6YrZoSJfsrH9wGyc=",
                        "address": {
                            "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                            "altBech32m": ""
                        }
                    }
                }
            ],
            "adviceNotes": [],
            "addressViews": [
                {
                    "decoded": {
                        "address": {
                            "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                            "altBech32m": ""
                        },
                        "index": {
                            "account": 0,
                            "randomizer": ""
                        },
                        "walletId": {
                            "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                        }
                    }
                }
            ],
            "denoms": [
                {
                    "description": "",
                    "denomUnits": [
                        {
                            "denom": "delegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                            "exponent": 6,
                            "aliases": []
                        },
                        {
                            "denom": "mdelegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                            "exponent": 3,
                            "aliases": []
                        },
                        {
                            "denom": "udelegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                            "exponent": 0,
                            "aliases": []
                        }
                    ],
                    "base": "udelegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                    "display": "delegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                    "name": "",
                    "symbol": "delUM(xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa)",
                    "penumbraAssetId": {
                        "inner": "Um2RXXeng0wMA+LHj8DOPqFr36veafb029EK+2ItAQk=",
                        "altBech32m": "",
                        "altBaseDenom": ""
                    },
                    "images": [],
                    "priorityScore": "0",
                    "badges": [],
                    "coingeckoId": ""
                },
                {
                    "description": "The native token of Penumbra",
                    "denomUnits": [
                        {
                            "denom": "penumbra",
                            "exponent": 6,
                            "aliases": []
                        },
                        {
                            "denom": "mpenumbra",
                            "exponent": 3,
                            "aliases": []
                        },
                        {
                            "denom": "upenumbra",
                            "exponent": 0,
                            "aliases": []
                        }
                    ],
                    "base": "upenumbra",
                    "display": "penumbra",
                    "name": "Penumbra",
                    "symbol": "UM",
                    "penumbraAssetId": {
                        "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                        "altBech32m": "",
                        "altBaseDenom": ""
                    },
                    "images": [
                        {
                            "png": "",
                            "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                            "theme": {
                                "primaryColorHex": "#c9a975",
                                "circle": false,
                                "darkMode": false
                            }
                        }
                    ],
                    "priorityScore": "999999999999",
                    "badges": [],
                    "coingeckoId": "penumbra"
                },
                {
                    "description": "",
                    "denomUnits": [
                        {
                            "denom": "voted_on_5",
                            "exponent": 6,
                            "aliases": []
                        },
                        {
                            "denom": "mvoted_on_5",
                            "exponent": 3,
                            "aliases": []
                        },
                        {
                            "denom": "uvoted_on_5",
                            "exponent": 0,
                            "aliases": []
                        }
                    ],
                    "base": "uvoted_on_5",
                    "display": "voted_on_5",
                    "name": "",
                    "symbol": "VotedOn5",
                    "penumbraAssetId": {
                        "inner": "gLbi6pj3640VZauNGK190DPxkygryIvqifQTzV0IlRE=",
                        "altBech32m": "",
                        "altBaseDenom": ""
                    },
                    "images": [],
                    "priorityScore": "10",
                    "badges": [],
                    "coingeckoId": ""
                }
            ],
            "transactionId": {
                "inner": "UIh/687Q1CFTlmffTAXQ+BGGnrAMSDBhJKCTeujENGk="
            },
            "prices": [],
            "extendedMetadata": [],
            "creationTransactionIdsByNullifier": [],
            "nullificationTransactionIdsByCommitment": [],
            "batchSwapOutputData": []
        },
        "view": {
            "bodyView": {
                "actionViews": [
                    {
                        "spend": {
                            "visible": {
                                "spend": {
                                    "body": {
                                        "balanceCommitment": {
                                            "inner": "9JKn4xLUCnuSDlroL91/+KuHPNRlHcCvj2jwah7nNhA="
                                        },
                                        "rk": {
                                            "inner": "4jhTc7nxSO9gEaQa+se3DqQIWzLz+axUf6DOsR7i0Qw="
                                        },
                                        "nullifier": {
                                            "inner": "Kx9LZXtjCtZdmGa8xPyj6GZYNZZMhVRsP8cxV+jsKxE="
                                        },
                                        "encryptedBackref": "GfyJa1lgg5t8fMfNTtUGLpm2+Gx6O67RLs8bKhRBRXX0GOj0msoi44y8lc24Ejw4"
                                    },
                                    "authSig": {
                                        "inner": "zhFzsXZFhDVYDTUlFP3SWHHWEz7rMq6SwDdUo9LC3gC+soFyX79Xu6mslPkn4JWMOtmaVATqe/oKQV14fx+2AQ=="
                                    },
                                    "proof": {
                                        "inner": "7lyBTMJEGNTM1lcoT2nvq/fELCRB+vfv3O3jiJZDXnIwTSMNL2Pml9X6J08p2d8AWGDPiMWtPk4jKBRgELTO4LUOaK3DLeIh+lEARy2Lq7vbn38Zs611c6i5QShvEaMB7sQjVIO8DlAvrus0GsCC7j9R4S9RVOwWmU4Gp/FHwepKNddC7yp0gZRqSbz+rBsBQSPyGEvAWBEl8FpS9kqJLTvNjC2RZPwvPfelRlcBn1znwmBnCKjz0klQtwiFo1iB"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "2004995231",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "The native token of Penumbra",
                                                "denomUnits": [
                                                    {
                                                        "denom": "penumbra",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "mpenumbra",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "upenumbra",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "upenumbra",
                                                "display": "penumbra",
                                                "name": "Penumbra",
                                                "symbol": "UM",
                                                "penumbraAssetId": {
                                                    "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "",
                                                        "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#c9a975",
                                                            "circle": false,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "999999999999",
                                                "badges": [],
                                                "coingeckoId": "penumbra"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "fQsEbLqAiwi+/IK6vpHAt36jQpX6YrZoSJfsrH9wGyc=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    {
                        "output": {
                            "visible": {
                                "output": {
                                    "body": {
                                        "notePayload": {
                                            "noteCommitment": {
                                                "inner": "ApHULjMvLI+FrHkLIKY8OkpT8W6delnvoi1/QrUUHxI="
                                            },
                                            "ephemeralKey": "fl4gaithcKXsgdXmqbcnVIMvb0XAarOt6Di9LDh8xQE=",
                                            "encryptedNote": {
                                                "inner": "ZK3M/7YlMcWwV5TtR4aCIA8ri3ixUaiGM8My4Kh6DPr0Zs+q+XxjD3I5gYm/yH0HrTYPS2iuDGRbDP1VRyLISo3qtZg7KnjMtng+N4weozPCiXyszOJWrmfcRAVtiS7W+PAYORSFOfS0mR/Rw7a2wf9O8ZL7a+9md1z2L1Fc8K15yKtEN1DkQtsik22zJXaFWjIRPaMmqy8TlExE2rTWM++e0JumPKBAUbz3Mgo3BcY="
                                            }
                                        },
                                        "balanceCommitment": {
                                            "inner": "TJ6YPGNrseBAmaIb0xiYARrULDzd2iArqNdH4rFqdQo="
                                        },
                                        "wrappedMemoKey": "usaEyrtbCTpBovi+FN0NqfUlVKM96ocibW3Wa7mCzN90lbdimS/leRmxVRMuo9Pw",
                                        "ovkWrappedKey": "HK5xBN30aNrAIdRwosByfGBYpND+NOoOFo3Y/rJ4JbIF4XEKxswyOMPHc1Z3DHtg"
                                    },
                                    "proof": {
                                        "inner": "kQNju2wzw1szio0bva/EIyYtbntjIVjjXpT/SYyCSduaSsM2UgezDjtu/Gpp2pEAgO9vw1vlvkmqChejC/Fyrw3TRxlrLKCee6GzW9fgNYZzXrFRvq22Kuko/1NsKRMBo/lkK81Xt5L6wntAKG/plLOFAUHrdF/are8vnsi6dBDJwjIEw/fVEXFO3v/Q6qqAyXbRsoR5+ptxmAhQfR5sKTUqcGqPDynmuR5JI6zxYUcvcgHAPsRh6yHP7D5Z0bkA"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "2004994271",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "The native token of Penumbra",
                                                "denomUnits": [
                                                    {
                                                        "denom": "penumbra",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "mpenumbra",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "upenumbra",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "upenumbra",
                                                "display": "penumbra",
                                                "name": "Penumbra",
                                                "symbol": "UM",
                                                "penumbraAssetId": {
                                                    "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "",
                                                        "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#c9a975",
                                                            "circle": false,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "999999999999",
                                                "badges": [],
                                                "coingeckoId": "penumbra"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "Imrv4wDXE07cZZrafMFt3OfgG/vw5wZpPI6QA83djwQ=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                },
                                "payloadKey": {
                                    "inner": "Ip/kw7NkL36adCOEn6oEWnrVYbXApJ1tQiwj8ME4Xb0="
                                }
                            }
                        }
                    },
                    {
                        "output": {
                            "visible": {
                                "output": {
                                    "body": {
                                        "notePayload": {
                                            "noteCommitment": {
                                                "inner": "M1EiwYSYEbny2/KC0pytXYL42Sy2ZKKpaAqLkMd/Cgk="
                                            },
                                            "ephemeralKey": "DLmsyeV5viI3aPDE+RNrTDNQGv+PvmpREL9bAwDUlBI=",
                                            "encryptedNote": {
                                                "inner": "7kGdsO5ZnlyVeEAvMPQ622Z1wnemeYozppuiZdf9BFDgwv49JeJhxhEMugztBvrrOtXilrExj5P4/y1DqJhNqdNhZ8JMIMuvyV7W1V0hTHF+PPe/y8440A6wZSt1bMpvVIETLYqhKxYU0qqoXuh64jzpohZFmPraG9Wse+Cdp1eXLLDWBJR/ymVgkhXO66K9zhTKMBP44UlTH3VbtuZCpw3gortHWp16qWi4dBhq3fg="
                                            }
                                        },
                                        "balanceCommitment": {
                                            "inner": "LsDuh3T2MFnPsYNPhGzbk0RytjTZ0R8VoVVRHIvgqAY="
                                        },
                                        "wrappedMemoKey": "o3JDYMni6eh70ZUiTfwNx/NeAmnZJYI8nkMZ5juYsUClAFalrFy+niEzymkwl00Q",
                                        "ovkWrappedKey": "sSnJ0L1VjP+lmVMh+YAY/C+cJvYjNGDTn6U5kQgzechdG1gXdNHTw3hGdyozcpYS"
                                    },
                                    "proof": {
                                        "inner": "bz7dEoRJZu5mnWDPp2GGhz9JjDb5bgcBWHANAKT7bAgxiheWSlvHcje8lG/lNaCB9aQcz8jQe73HW01FU2OyInb2l95ResXFgFk09i0PYfoQlG3S1cc/v8QH+l/E0FYAh0RrYX7ERdZul6Ssa8qQ7524wYYFe5EwlWeSO7LFtMcR466CrHkLzIjEFU3ShDsAHnBoCqOHkb1XnSYNIyC8LudbrEU/WtDepM1ZP4D7T7nAL+IWwtT7tGfs85nAJHcB"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "70058933",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "",
                                                "denomUnits": [
                                                    {
                                                        "denom": "voted_on_5",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "mvoted_on_5",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "uvoted_on_5",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "uvoted_on_5",
                                                "display": "voted_on_5",
                                                "name": "",
                                                "symbol": "VotedOn5",
                                                "penumbraAssetId": {
                                                    "inner": "gLbi6pj3640VZauNGK190DPxkygryIvqifQTzV0IlRE=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [],
                                                "priorityScore": "10",
                                                "badges": [],
                                                "coingeckoId": ""
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "7ihXMfyGklHaEEk845yyUUtfxXZy3XXHESKp7TO21mk=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                },
                                "payloadKey": {
                                    "inner": "Ip/kw7NkL36adCOEn6oEWnrVYbXApJ1tQiwj8ME4Xb0="
                                }
                            }
                        }
                    },
                    {
                        "delegatorVote": {
                            "visible": {
                                "delegatorVote": {
                                    "body": {
                                        "proposal": "5",
                                        "startPosition": "697381158912",
                                        "vote": {
                                            "vote": "VOTE_YES"
                                        },
                                        "value": {
                                            "amount": {
                                                "lo": "68604594",
                                                "hi": "0"
                                            },
                                            "assetId": {
                                                "inner": "Um2RXXeng0wMA+LHj8DOPqFr36veafb029EK+2ItAQk=",
                                                "altBech32m": "",
                                                "altBaseDenom": ""
                                            }
                                        },
                                        "unbondedAmount": {
                                            "lo": "70058933",
                                            "hi": "0"
                                        },
                                        "nullifier": {
                                            "inner": "lC5qcWc2yLuT9bqk8eOVD+lEAK3kvX35O6sLv3KrnAk="
                                        },
                                        "rk": {
                                            "inner": "hBRf1AuYK7uQM30hvBVcKdTv/L0rJNx1FClmvkuSPQw="
                                        }
                                    },
                                    "authSig": {
                                        "inner": "mqLJpoAPQ3adqAg4xTEAjUYYKnExdY6lGk1OZFvB0wjojo1Lr/HMYAiKGCVObNPwPAvDmQbbkuzJT3M8m1BvBA=="
                                    },
                                    "proof": {
                                        "inner": "iz/APBkVOKGVpCroAcDiVZKgPAEJAyTaznhJP/PNjv/uxN5AHIHa8YpWNKPVjVKBliNvI+VT0RMNniEmxnASlsnPoJE3Gzfq/x/16133UKzSdBYJmoAUm364Ho7cLBUBXn5NWwt9igmIfXfrnDM5ihMwh475XGHh57Sk2TI0q4xOWS6031f7sN0J6YlhXE8A1S+E/1x9rhR7lsziG6joEh/eldsDWHnPeYQIkvU1bZlF9fJzebdqnmnAy0rR/mgA"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "68604594",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "",
                                                "denomUnits": [
                                                    {
                                                        "denom": "delegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "mdelegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "udelegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "udelegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                "display": "delegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                "name": "",
                                                "symbol": "delUM(xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa)",
                                                "penumbraAssetId": {
                                                    "inner": "Um2RXXeng0wMA+LHj8DOPqFr36veafb029EK+2ItAQk=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [],
                                                "priorityScore": "0",
                                                "badges": [],
                                                "coingeckoId": ""
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "y+q0oqOm3n6c1AYMaJ0ibkVnBoTGbbUpFhbt/mEUT2o=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                ],
                "transactionParameters": {
                    "expiryHeight": "0",
                    "chainId": "penumbra-1",
                    "fee": {
                        "amount": {
                            "lo": "960",
                            "hi": "0"
                        }
                    }
                },
                "detectionData": {
                    "fmdClues": [
                        {
                            "inner": "XrOyKo1QDM2Fh77jYEfSvUnR/UVlTXUFZw2D3lD3HRFvpPQRNl9exAU0SWVbiSoz5N0BCmSP638HmDG91xzsAgAAAAA="
                        },
                        {
                            "inner": "sm5HIpF39cwi+OgNxxJVzv05ySX7YZ1fRXvp6IbI8QWYw7+JAQtrLOrobFypV6bf2z87FXiEPDSHpjGFPxfRAAAAAAA="
                        }
                    ]
                },
                "memoView": {
                    "visible": {
                        "ciphertext": {
                            "inner": "dcklvlUz4ASwD/Lrm4YjDpk9yKNUjGd0gQymFDHw4nmJBOTPQA2hdCGuZuP4IlxWUj3U8TY63D4vRyW2yMHqveUNt311tX/sJxd/ubLOHhd1bypnLQULVyuSnxR0VDLvZNroLaamGin736N8kppOjnfDRv0O9OijocHCvKzhgwUWndCfqVlpst7gtmFqmxdfiGD8XJTYGtFp9Cl7wjN5hYXM59tBtToRJ/XpuAIDcRJETZ/newKDDcORvZvRvElEHee11L2r0yb+61uaG/14piSAXFwuvpv/cbEf71v+r6av+ok4+593CQREkiM9a5EJSKbZpt5qfviG/8MA8ps+fpPTE3bRXY3uEGUJxDjbdZx//UoJIF2UoBhpZsOCq32H75jDXNW3DzL78zWUfxjwSeu7NVIC/hlbvV8CsRvsmm+fNCZoYF874cOyRqTa1Wfcs6sekw7021ROU6Bdip2wFiR7N81/k7GLL0YnNED1q/LGCDj5r7uBXS98gcqa2gd2JaSWHEHRCS44w9ZwDDJ0Q7/OJ6nJ0idevGq4fSSBcfTKeIYXD3smsOsr+302jIVWIlFSs27vuRnT7Y8A1iqGwd2YwpcxyFYZqVz7Uwib4xynML5XlOsxO3Uh0obP0IZDZfEx7aNv6KIbPJtGvt1KcZmIWpYKg5hiXC/4nUEIBgH+LvCauMAV2hFYfxoAifUo"
                        },
                        "plaintext": {
                            "returnAddress": {
                                "decoded": {
                                    "address": {
                                        "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                        "altBech32m": ""
                                    },
                                    "index": {
                                        "account": 0,
                                        "randomizer": ""
                                    },
                                    "walletId": {
                                        "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                    }
                                }
                            },
                            "text": ""
                        }
                    }
                }
            },
            "bindingSig": {
                "inner": "qK0HRmw8d8DUF7ZE9+xeSEA+sWDE8ovUuAIEBYScFhA+UutSDYvIYIaBh338jgM+e+u8CBCi0jS0Fo68CoSfAA=="
            },
            "anchor": {
                "inner": "hIndIJKxZ9tlaZf/ry47qwfr5r7f/Rqdlmwmp4lrngI="
            }
        },
        "summary": {
            "effects": [
                {
                    "address": {
                        "opaque": {
                            "address": {
                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                "altBech32m": ""
                            }
                        }
                    },
                    "balance": {
                        "values": [
                            {
                                "value": {
                                    "amount": {
                                        "lo": "960",
                                        "hi": "0"
                                    },
                                    "assetId": {
                                        "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    }
                                },
                                "negated": false
                            },
                            {
                                "value": {
                                    "amount": {
                                        "lo": "70058933",
                                        "hi": "0"
                                    },
                                    "assetId": {
                                        "inner": "gLbi6pj3640VZauNGK190DPxkygryIvqifQTzV0IlRE=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    }
                                },
                                "negated": true
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        "height": "4085039",
        "id": {
            "inner": "jVH7ohBePLxnlGFYr12nCSF2P6+GCzTm1jrgsrMMSAU="
        },
        "transaction": {
            "body": {
                "actions": [
                    {
                        "spend": {
                            "body": {
                                "balanceCommitment": {
                                    "inner": "SjdWKpeukikDOzq8VrAugcEWvh//qmbuMTOIIDnpGwI="
                                },
                                "rk": {
                                    "inner": "Ip7SeHHEACgbIa7P1LgeK5vaagGaDGqUBxCfdX0HdQU="
                                },
                                "nullifier": {
                                    "inner": "4SLe5hYNT5JBAq6B0/T1QlZ+XObBaQKc0+d8qmJqIRI="
                                },
                                "encryptedBackref": "DBAyXNkVVkCtWxVDA24mBrLP5x2YGTxBvfTnS7HwhstMSICYfNPtVfmATAF9cfs9"
                            },
                            "authSig": {
                                "inner": "5pY3M8R0cu/aKyl7oos9GMbGSJP/O3I7eX/kMLlQdA6NPiH/WX3iFZQI12wy/oyUIzvrFfNblSnhgX5Gylx4AA=="
                            },
                            "proof": {
                                "inner": "ltykcJWcgslhMz7SPpEAC062Juuu2aoVffImaukf6RmOB31n/YPGM0dlJWxImruA4NQWCgQCRTiC/nltVn1USAEDPqgtVAI1XMDmNV/mnXWlLQF3EdwAl5jdJrvA/hsANDf74O1KJLnCzs/XxW9pU+jEil4jw8scYtQC0rkemgl4tdcv1W3ehJ3f+OdhYnyB+ZwYdCU7oL9sxgowXDWTtf0namx1+vVSzRxApASh1CKK7IoiT5r3OaqY8iJEHoKA"
                            }
                        }
                    },
                    {
                        "output": {
                            "body": {
                                "notePayload": {
                                    "noteCommitment": {
                                        "inner": "Oe/bn3F6xuYqCOr1Oad4TYcjZWY8FLEH1t5uYaCWSgQ="
                                    },
                                    "ephemeralKey": "Ct3c9IiI7mK4ZZcttIQTP0zSKzBjjS2XImT1ITX5VgU=",
                                    "encryptedNote": {
                                        "inner": "X+zyYERud6tgFDlUPTHPKbYgeDW9A+kRm43l35UpAUDEbXOyHX3hq/hO+W1goTPpvDJ3jHR6sZR5Bdgfa+PRamlLW5FxaWdWMEeQJUEVGyZzkX05fSzXAFwf43buVnzquIwJfwsOfy9v3ZUx3M9ogC1L05JNO/7rwIE0LV744k/8Q5/mm4EZlTZu6fiyp5Bx9CEN1CJcOwb9i7xpxjDamBaGFyN++BjqhMXjtpu5ctg="
                                    }
                                },
                                "balanceCommitment": {
                                    "inner": "5MnASDqywuYR1WYmdUZK840VkJXkznOWiNWwMQVuGRI="
                                },
                                "wrappedMemoKey": "1AOiTnOGORW3iB6OMb2Sf/mjbbvfFos6PQlD1cmXqBPc7JdiSH1kfMyFBJRZYGqX",
                                "ovkWrappedKey": "yuXeAy0fQHrMuBLR7BmY8peGNHMa4wJaKl2KtrG5HLkhDj9LNcZlra2FtxjlTIRm"
                            },
                            "proof": {
                                "inner": "9dF0hpDZoltUd53/6dr6dic0FHlvgxm5wnaWA4NOQt5vZmEtWDpt/zNhcr4uHqaBdO/MuA1zy41k9O0V4aIxIjN4LeYpeXIMgcllwWoFvqnHL2Y0ntP0+VYxyB/3w6gBeW402YchYWu7tVBiHNYGRyogCEidcZDkKmSdsJfeGT9i2UYJUTFVspN298Hl710ABKbwqe6QAPpBK6+CW/rlNGivUEyOT95SHGc3/Uo1R3qXKpYNSDL9DHJgc08esnoB"
                            }
                        }
                    },
                    {
                        "output": {
                            "body": {
                                "notePayload": {
                                    "noteCommitment": {
                                        "inner": "3ng8HxNQIseZ81poxWmZylCwHPe4gFb+5OmiHwYrMQo="
                                    },
                                    "ephemeralKey": "xFNc0wrqBbmcW00lmVdmFP0gUJWQfwJCvYm95p00bAw=",
                                    "encryptedNote": {
                                        "inner": "SMJb2tCQQLt3yA6wRN81DTbUzKt2nZlzNmbl8WEkTRS9C93PB54ljfHqOXR7UaOzkyoZYaEyD+IP62aG1eEtEbAe04SfUshnq9OOEpbLpYr1zsdxmk/bVykXaTMqIDA0kYTZ7rcu2oiU6mkd7YBWtDRc4GIFQk+SfbIGhzdRBAuvKqhaN3AefPrd2k8P5M1p2VfKsgQkJFavyUNwNzdIiPMtalnus3GwTz/aE0aDQ4U="
                                    }
                                },
                                "balanceCommitment": {
                                    "inner": "Hn0adLMTxw4SgfMnLOMz7nrR4Iyl3pyTFWT9F0DRFRA="
                                },
                                "wrappedMemoKey": "T2Uo0ICa+Htq5x4ImPFzaZqF9pfdN9b9lzRLWTGZa2VZV9DUsItyY5v8BczGiAKu",
                                "ovkWrappedKey": "Pp4i1TwF6UVNFh0+JfycY/CXmDj9DNowdm5XL6fja+J0zp6JPJ+iB5nhXwIUzvLL"
                            },
                            "proof": {
                                "inner": "X+0SNC7Bs+2mCq/gkKlyLfoJSwjo/NeJFqAdD8D+L0azQ3FnOaZrlvoUZJIGA46A5CM113lyWyNygBN+/uvsh1qjYMBDR9ZArwU17wzakEUgCk/CD3iQUN8LUdN+MCIBviHsr2ZKaSt8T52et8doF5DEH99wJiCU6R5ZJg93nfw/SKvrzBo+VNTzUxFfAVaAo1bXNDwZNv4tJYsZuU3qy2UCrUygYD2fLyHIOA22FlOj6wJ68Ol6TJSznwttVoMB"
                            }
                        }
                    }
                ],
                "transactionParameters": {
                    "expiryHeight": "0",
                    "chainId": "penumbra-1",
                    "fee": {
                        "amount": {
                            "lo": "934",
                            "hi": "0"
                        }
                    }
                },
                "detectionData": {
                    "fmdClues": [
                        {
                            "inner": "cn/49FByaQM6pwpChEcBhYIicd8Ag3UnhvfqkbKDbwXS7lO7cDuCRelvd3SDYizjemiCvU/CqG/Dp9goyqcdAgAAAAA="
                        },
                        {
                            "inner": "xls6xQOUYlmDRjqcCMssk+3roGUJ66VbA0juxs9cmQpUJiUhPObCXKUjIgR8iVXPrhH7nYZy5xwwHHNk41DYAQAAAAA="
                        }
                    ]
                },
                "memo": {
                    "inner": "GHKE563EiJv1/LGWQwGb/aQUa+Jg+b8GMZCM34oyEvraiKLZZWd1lVJZYAat7BIaRXJkB/zZ7+EwDovKIruvOY7aYynBzTym2qOtawvhxfpijwZyDG3oK7wpXQI2HujKgUEZulAq2XxjisHwuxta2sgQr2D385ggwy+yisO2ONasg9h8dOxnp9KBzfZmhFys31RpdQe9mZ0eBXy27pC+29AZ/ur+SmmVA3AqmmKvkJt0itCZKGKnGSl+tfGjxCFGxW2u0n32v8bOBV3knZhCNi2bysdid9lIF5o56QJumIeWV6CZXohqOsYYJEogf1cICqLfmF9ni7LF9OCK860wpG2uKm0toYD6ZHzYtQhuhkbWse+Vkbuk3LKHcNdcgP+nwFlN7E5D4ILZWcu6D9ekj+RcviliG5gZhg7nWrny4rVhEBPafW/PBcK0lNimd3unb+KXwdPx5zL9KnxewNbIVf/Ari5jjhC8SyIRgQc8pe0YG6D+Zuo9JhTwbqqI6Wnx70ebXjz3+C38bllGIvsbvJquTY752/o3e+2B+1On0fTrajI83yEkwxEzaeTsCeaZq38I00aEqALedY7DiUez9D+rNEfkrjFbP7Py2MWHauF3N00GpCHsJnShz+XO1LplJgiSLQ+qtS7kyQs8hD7uTD0isIvNWhzJ3T4bOv7Li89Zs+nSud4zrH7DoSp++hv2"
                }
            },
            "bindingSig": {
                "inner": "GELBmcUVr77j55JZCuNtutfyed+UvLOlf8q4rOvqcw13sjgkU0euU5lCJBncA6WcNkjOSXfWXxEk3DQlhPlRBA=="
            },
            "anchor": {
                "inner": "7IUKVYUgS2vpZ0Xe7jQytaO2hihP83zck1d4G1B6rgg="
            }
        },
        "perspective": {
            "payloadKeys": [
                {
                    "payloadKey": {
                        "inner": "ESxcDaP5LxURe3rcGMva3NqW4tJBDHIV31lf/Xg7YO0="
                    },
                    "commitment": {
                        "inner": "Oe/bn3F6xuYqCOr1Oad4TYcjZWY8FLEH1t5uYaCWSgQ="
                    }
                },
                {
                    "payloadKey": {
                        "inner": "/qNKkyHt2ArKzTIobbNeJMuI4cd52LAvliEHt1bzdOA="
                    },
                    "commitment": {
                        "inner": "3ng8HxNQIseZ81poxWmZylCwHPe4gFb+5OmiHwYrMQo="
                    }
                }
            ],
            "spendNullifiers": [],
            "adviceNotes": [],
            "addressViews": [
                {
                    "decoded": {
                        "address": {
                            "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                            "altBech32m": ""
                        },
                        "index": {
                            "account": 0,
                            "randomizer": ""
                        },
                        "walletId": {
                            "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                        }
                    }
                },
                {
                    "decoded": {
                        "address": {
                            "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                            "altBech32m": ""
                        },
                        "index": {
                            "account": 0,
                            "randomizer": ""
                        },
                        "walletId": {
                            "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                        }
                    }
                }
            ],
            "denoms": [
                {
                    "description": "The native token of Penumbra",
                    "denomUnits": [
                        {
                            "denom": "penumbra",
                            "exponent": 6,
                            "aliases": []
                        },
                        {
                            "denom": "mpenumbra",
                            "exponent": 3,
                            "aliases": []
                        },
                        {
                            "denom": "upenumbra",
                            "exponent": 0,
                            "aliases": []
                        }
                    ],
                    "base": "upenumbra",
                    "display": "penumbra",
                    "name": "Penumbra",
                    "symbol": "UM",
                    "penumbraAssetId": {
                        "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                        "altBech32m": "",
                        "altBaseDenom": ""
                    },
                    "images": [
                        {
                            "png": "",
                            "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                            "theme": {
                                "primaryColorHex": "#c9a975",
                                "circle": false,
                                "darkMode": false
                            }
                        }
                    ],
                    "priorityScore": "999999999999",
                    "badges": [],
                    "coingeckoId": "penumbra"
                }
            ],
            "transactionId": {
                "inner": "jVH7ohBePLxnlGFYr12nCSF2P6+GCzTm1jrgsrMMSAU="
            },
            "prices": [],
            "extendedMetadata": [],
            "creationTransactionIdsByNullifier": [],
            "nullificationTransactionIdsByCommitment": [],
            "batchSwapOutputData": []
        },
        "view": {
            "bodyView": {
                "actionViews": [
                    {
                        "spend": {
                            "opaque": {
                                "spend": {
                                    "body": {
                                        "balanceCommitment": {
                                            "inner": "SjdWKpeukikDOzq8VrAugcEWvh//qmbuMTOIIDnpGwI="
                                        },
                                        "rk": {
                                            "inner": "Ip7SeHHEACgbIa7P1LgeK5vaagGaDGqUBxCfdX0HdQU="
                                        },
                                        "nullifier": {
                                            "inner": "4SLe5hYNT5JBAq6B0/T1QlZ+XObBaQKc0+d8qmJqIRI="
                                        },
                                        "encryptedBackref": "DBAyXNkVVkCtWxVDA24mBrLP5x2YGTxBvfTnS7HwhstMSICYfNPtVfmATAF9cfs9"
                                    },
                                    "authSig": {
                                        "inner": "5pY3M8R0cu/aKyl7oos9GMbGSJP/O3I7eX/kMLlQdA6NPiH/WX3iFZQI12wy/oyUIzvrFfNblSnhgX5Gylx4AA=="
                                    },
                                    "proof": {
                                        "inner": "ltykcJWcgslhMz7SPpEAC062Juuu2aoVffImaukf6RmOB31n/YPGM0dlJWxImruA4NQWCgQCRTiC/nltVn1USAEDPqgtVAI1XMDmNV/mnXWlLQF3EdwAl5jdJrvA/hsANDf74O1KJLnCzs/XxW9pU+jEil4jw8scYtQC0rkemgl4tdcv1W3ehJ3f+OdhYnyB+ZwYdCU7oL9sxgowXDWTtf0namx1+vVSzRxApASh1CKK7IoiT5r3OaqY8iJEHoKA"
                                    }
                                }
                            }
                        }
                    },
                    {
                        "output": {
                            "visible": {
                                "output": {
                                    "body": {
                                        "notePayload": {
                                            "noteCommitment": {
                                                "inner": "Oe/bn3F6xuYqCOr1Oad4TYcjZWY8FLEH1t5uYaCWSgQ="
                                            },
                                            "ephemeralKey": "Ct3c9IiI7mK4ZZcttIQTP0zSKzBjjS2XImT1ITX5VgU=",
                                            "encryptedNote": {
                                                "inner": "X+zyYERud6tgFDlUPTHPKbYgeDW9A+kRm43l35UpAUDEbXOyHX3hq/hO+W1goTPpvDJ3jHR6sZR5Bdgfa+PRamlLW5FxaWdWMEeQJUEVGyZzkX05fSzXAFwf43buVnzquIwJfwsOfy9v3ZUx3M9ogC1L05JNO/7rwIE0LV744k/8Q5/mm4EZlTZu6fiyp5Bx9CEN1CJcOwb9i7xpxjDamBaGFyN++BjqhMXjtpu5ctg="
                                            }
                                        },
                                        "balanceCommitment": {
                                            "inner": "5MnASDqywuYR1WYmdUZK840VkJXkznOWiNWwMQVuGRI="
                                        },
                                        "wrappedMemoKey": "1AOiTnOGORW3iB6OMb2Sf/mjbbvfFos6PQlD1cmXqBPc7JdiSH1kfMyFBJRZYGqX",
                                        "ovkWrappedKey": "yuXeAy0fQHrMuBLR7BmY8peGNHMa4wJaKl2KtrG5HLkhDj9LNcZlra2FtxjlTIRm"
                                    },
                                    "proof": {
                                        "inner": "9dF0hpDZoltUd53/6dr6dic0FHlvgxm5wnaWA4NOQt5vZmEtWDpt/zNhcr4uHqaBdO/MuA1zy41k9O0V4aIxIjN4LeYpeXIMgcllwWoFvqnHL2Y0ntP0+VYxyB/3w6gBeW402YchYWu7tVBiHNYGRyogCEidcZDkKmSdsJfeGT9i2UYJUTFVspN298Hl710ABKbwqe6QAPpBK6+CW/rlNGivUEyOT95SHGc3/Uo1R3qXKpYNSDL9DHJgc08esnoB"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "8928000000",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "The native token of Penumbra",
                                                "denomUnits": [
                                                    {
                                                        "denom": "penumbra",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "mpenumbra",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "upenumbra",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "upenumbra",
                                                "display": "penumbra",
                                                "name": "Penumbra",
                                                "symbol": "UM",
                                                "penumbraAssetId": {
                                                    "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "",
                                                        "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#c9a975",
                                                            "circle": false,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "999999999999",
                                                "badges": [],
                                                "coingeckoId": "penumbra"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "7RvpFbtbUNV9K0hY8tmm7SPCiKOrP8NbxourNNcUqKs=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                },
                                "payloadKey": {
                                    "inner": "OJ/wAvop7LxHKPzr/oDLRLSjb4SjCy0L1UWLL/+7pVo="
                                }
                            }
                        }
                    },
                    {
                        "output": {
                            "opaque": {
                                "output": {
                                    "body": {
                                        "notePayload": {
                                            "noteCommitment": {
                                                "inner": "3ng8HxNQIseZ81poxWmZylCwHPe4gFb+5OmiHwYrMQo="
                                            },
                                            "ephemeralKey": "xFNc0wrqBbmcW00lmVdmFP0gUJWQfwJCvYm95p00bAw=",
                                            "encryptedNote": {
                                                "inner": "SMJb2tCQQLt3yA6wRN81DTbUzKt2nZlzNmbl8WEkTRS9C93PB54ljfHqOXR7UaOzkyoZYaEyD+IP62aG1eEtEbAe04SfUshnq9OOEpbLpYr1zsdxmk/bVykXaTMqIDA0kYTZ7rcu2oiU6mkd7YBWtDRc4GIFQk+SfbIGhzdRBAuvKqhaN3AefPrd2k8P5M1p2VfKsgQkJFavyUNwNzdIiPMtalnus3GwTz/aE0aDQ4U="
                                            }
                                        },
                                        "balanceCommitment": {
                                            "inner": "Hn0adLMTxw4SgfMnLOMz7nrR4Iyl3pyTFWT9F0DRFRA="
                                        },
                                        "wrappedMemoKey": "T2Uo0ICa+Htq5x4ImPFzaZqF9pfdN9b9lzRLWTGZa2VZV9DUsItyY5v8BczGiAKu",
                                        "ovkWrappedKey": "Pp4i1TwF6UVNFh0+JfycY/CXmDj9DNowdm5XL6fja+J0zp6JPJ+iB5nhXwIUzvLL"
                                    },
                                    "proof": {
                                        "inner": "X+0SNC7Bs+2mCq/gkKlyLfoJSwjo/NeJFqAdD8D+L0azQ3FnOaZrlvoUZJIGA46A5CM113lyWyNygBN+/uvsh1qjYMBDR9ZArwU17wzakEUgCk/CD3iQUN8LUdN+MCIBviHsr2ZKaSt8T52et8doF5DEH99wJiCU6R5ZJg93nfw/SKvrzBo+VNTzUxFfAVaAo1bXNDwZNv4tJYsZuU3qy2UCrUygYD2fLyHIOA22FlOj6wJ68Ol6TJSznwttVoMB"
                                    }
                                }
                            }
                        }
                    }
                ],
                "transactionParameters": {
                    "expiryHeight": "0",
                    "chainId": "penumbra-1",
                    "fee": {
                        "amount": {
                            "lo": "934",
                            "hi": "0"
                        }
                    }
                },
                "detectionData": {
                    "fmdClues": [
                        {
                            "inner": "cn/49FByaQM6pwpChEcBhYIicd8Ag3UnhvfqkbKDbwXS7lO7cDuCRelvd3SDYizjemiCvU/CqG/Dp9goyqcdAgAAAAA="
                        },
                        {
                            "inner": "xls6xQOUYlmDRjqcCMssk+3roGUJ66VbA0juxs9cmQpUJiUhPObCXKUjIgR8iVXPrhH7nYZy5xwwHHNk41DYAQAAAAA="
                        }
                    ]
                },
                "memoView": {
                    "visible": {
                        "ciphertext": {
                            "inner": "GHKE563EiJv1/LGWQwGb/aQUa+Jg+b8GMZCM34oyEvraiKLZZWd1lVJZYAat7BIaRXJkB/zZ7+EwDovKIruvOY7aYynBzTym2qOtawvhxfpijwZyDG3oK7wpXQI2HujKgUEZulAq2XxjisHwuxta2sgQr2D385ggwy+yisO2ONasg9h8dOxnp9KBzfZmhFys31RpdQe9mZ0eBXy27pC+29AZ/ur+SmmVA3AqmmKvkJt0itCZKGKnGSl+tfGjxCFGxW2u0n32v8bOBV3knZhCNi2bysdid9lIF5o56QJumIeWV6CZXohqOsYYJEogf1cICqLfmF9ni7LF9OCK860wpG2uKm0toYD6ZHzYtQhuhkbWse+Vkbuk3LKHcNdcgP+nwFlN7E5D4ILZWcu6D9ekj+RcviliG5gZhg7nWrny4rVhEBPafW/PBcK0lNimd3unb+KXwdPx5zL9KnxewNbIVf/Ari5jjhC8SyIRgQc8pe0YG6D+Zuo9JhTwbqqI6Wnx70ebXjz3+C38bllGIvsbvJquTY752/o3e+2B+1On0fTrajI83yEkwxEzaeTsCeaZq38I00aEqALedY7DiUez9D+rNEfkrjFbP7Py2MWHauF3N00GpCHsJnShz+XO1LplJgiSLQ+qtS7kyQs8hD7uTD0isIvNWhzJ3T4bOv7Li89Zs+nSud4zrH7DoSp++hv2"
                        },
                        "plaintext": {
                            "returnAddress": {
                                "opaque": {
                                    "address": {
                                        "inner": "6oV62iOZbRH9napzIhKwP6NXRMDIM0mJhZaBXrkTCm1LRrnZNWYB3V4SAyfKWBJDNLsXreAd8XXtr97MKB0WNxT6vxDdZVraivNVAmRkCag=",
                                        "altBech32m": ""
                                    }
                                }
                            },
                            "text": ""
                        }
                    }
                }
            },
            "bindingSig": {
                "inner": "GELBmcUVr77j55JZCuNtutfyed+UvLOlf8q4rOvqcw13sjgkU0euU5lCJBncA6WcNkjOSXfWXxEk3DQlhPlRBA=="
            },
            "anchor": {
                "inner": "7IUKVYUgS2vpZ0Xe7jQytaO2hihP83zck1d4G1B6rgg="
            }
        },
        "summary": {
            "effects": [
                {
                    "address": {
                        "opaque": {
                            "address": {
                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                "altBech32m": ""
                            }
                        }
                    },
                    "balance": {
                        "values": [
                            {
                                "value": {
                                    "amount": {
                                        "lo": "8928000000",
                                        "hi": "0"
                                    },
                                    "assetId": {
                                        "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    }
                                },
                                "negated": true
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        "height": "4055696",
        "id": {
            "inner": "FAcZ849Z1W2O/axI4P1cw/xoKP7h72PfjAk+Xa8Xl2o="
        },
        "transaction": {
            "body": {
                "actions": [
                    {
                        "spend": {
                            "body": {
                                "balanceCommitment": {
                                    "inner": "kCZqgWarnqQyaaJNwRc1FxIeGzNcFHE4rf8kVMOt1g4="
                                },
                                "rk": {
                                    "inner": "etZXR7WbsFOGMMFYn7CRYknyvTwl7FBQCLrnrYN34AA="
                                },
                                "nullifier": {
                                    "inner": "+MnEVC/lEgr3tboBgiiHBGa7vTD96xAgnECW8pZd1AU="
                                },
                                "encryptedBackref": "IZ8vbO22AQqURNZkVTh/RAnl7/Yz1gWk1J79d99FR6ImwOKq5jp94bN4x+WLP1ll"
                            },
                            "authSig": {
                                "inner": "mOziRzesDynvbgt4K2JOzcgsmyxcd5c9pm1vDBWLIxGvj17QGQpUChcOFHqHz6W9a8y7ghFfhIOGpJKDpARLAA=="
                            },
                            "proof": {
                                "inner": "mo82ZEmrA+tEcIia8g+/cLLLNUGdLpEwpgRqIUgYKx+TaUfD2TD7owThhbQuxpyADiP2V69NXcjToHZtVPIvLrXEF/AHP47sg1R1gQUpuHGjFkIAdvqNITVrLWOhgiYAopbBh2zQufvZCWeMJxIEWrkepjnZAOpRNt6Ha4l3CA+8J2C7nMjZYd09AW1b6DyBZ5s6L3uJD3rPEfDAVOuAgPBG3gYoglTU8b5SCEfB0IPKvdBriHVExD/W6kpFnBaB"
                            }
                        }
                    },
                    {
                        "output": {
                            "body": {
                                "notePayload": {
                                    "noteCommitment": {
                                        "inner": "inmRlanc/c/34Gu4Dn1PLLK8WqV+yq657hIzOh4i4gw="
                                    },
                                    "ephemeralKey": "6CVtnTGDUAyDyZOg26sMkiQK5Z0fLaOEtfNN9FfY7xE=",
                                    "encryptedNote": {
                                        "inner": "iFLB7IxN98T0Grs7eJF6j5AudvLcBmSADHIylQtnab/8UeRg26ow4UYkpZVLXSAj4J7VXSxM2PBQj4DRm7qBpOlieYVztfOo19lxusrgIE6hL33BZN410qAqI0oJ0cqhv0LK9NPfiJTmceDuxRHhYmXEgzpuxGfJbFleiBzv+if3sxPwWr4MPyUf4QIioDCJTlg7JhrpAnvsf1ZneZAuqH4RIvrgKcoTZ3WmtEHqa54="
                                    }
                                },
                                "balanceCommitment": {
                                    "inner": "hq2ZrT0w+WLmz1mRfV3AaNl5LqcJQRSdBQkX2HL3VgQ="
                                },
                                "wrappedMemoKey": "p3WV7cxltipQLcmseLXfpRr+9KfpVU+B8AX49eLnuDe4tJNSJYerAyfKAJ7MDUWm",
                                "ovkWrappedKey": "BdJmZP4/If73h3em0Rc+mnikaw4hmmUBA3H+FhbU8BzAwcI5o0b3hRv3s3RN3027"
                            },
                            "proof": {
                                "inner": "89VwTatjNPuthQbgFP0hyVVqv8W3tBi6GtQz/CyMjP+gxcZZc/qNnVMldz8vhTYAGJo2RO4TNMjyE8Ak1W/rLnKzt9DrnSLZ+2j09LcWm9W+x1fxXdJo/2MoRWXu3jkA4dnALq6z66ymkPJp8JRf53SuFiqHKtRqnVHrE+88SjJ1c/6y0U+i8J6A2pAQXkUB1IVMa012CxsZcDkmFM1U71ln7Ytv0RMyq3gD4KhVONlM2mO8cH+LmjL0dR9gK1yA"
                            }
                        }
                    },
                    {
                        "output": {
                            "body": {
                                "notePayload": {
                                    "noteCommitment": {
                                        "inner": "p3XL8M97GDJaPZPRo1RlcfjAtWhequa3X9WvfcKRfQE="
                                    },
                                    "ephemeralKey": "CNAD7tmQJv+cYlJ+cLPA2j3Rtrb9RYCOAVnukfuKxA0=",
                                    "encryptedNote": {
                                        "inner": "hooBCPAZ4Ud1JAMHQzM5E/1ABk4j8bfjt4WRuf6lizy5fQ0GkiiUY5FwukIokz68dD/BIWUu9uPAzxJc842hhIopOY3hAMuCwlQ8+JsECJlMDCigaEERITE28HnemgkuOQr5K2RemrDBLFEW0cY7xJc8wuR/Xlv2iOczMtVouiTdUryhHKYV6Q3Pg2Mj4aOMQdLbAGHV/gKfvdNf/G07Atn+bMyDcH/R3EmdGs45BHo="
                                    }
                                },
                                "balanceCommitment": {
                                    "inner": "Nurth5PP3lAMxOaLZU7qZWHwkg8N6is94LUyQ1f5XQQ="
                                },
                                "wrappedMemoKey": "vU+OKyBHxzZQJeW1vhj7X+EuO0le4B51Nh/5c6DJmfFz2rVg4+yNLJu6Zo7KuzLC",
                                "ovkWrappedKey": "YKmY484B70myGbf8UqqbgCwUM67QDJZHPZwZoRqQE+kA9k5eX++Nx5gVGjBwJzFd"
                            },
                            "proof": {
                                "inner": "AeU0Enxci/VwaxhuGimwcFj6EjaPQWvBYcK3VQrjN8MskpJOnTfXNJjHxUvO9yAA8Bgka+4Nm/qRc+QOKkHdw0Ceyy7to//W04QFIu1kYtXQOIG40DCLh8yItXZM4l0AhFyf6RGdHUi+TYqGm+M9C0Gz/1AUfGBpyHNEfEGjKMgw1e4oiDbRh/EfMmwRhtKAk/Bp3K86waus3GSigbj+Cr+XmguCjP3AWd+QGtkuzSolWjFwGA4WnWMEk5QV8iAB"
                            }
                        }
                    },
                    {
                        "delegate": {
                            "validatorIdentity": {
                                "ik": "NAeSi/zd8bsMIoz3yMvVa4vru0OxCxBA/JrY54F0rgc="
                            },
                            "epochIndex": "152",
                            "unbondedAmount": {
                                "lo": "70000000",
                                "hi": "0"
                            },
                            "delegationAmount": {
                                "lo": "68604594",
                                "hi": "0"
                            }
                        }
                    }
                ],
                "transactionParameters": {
                    "expiryHeight": "0",
                    "chainId": "penumbra-1",
                    "fee": {
                        "amount": {
                            "lo": "937",
                            "hi": "0"
                        }
                    }
                },
                "detectionData": {
                    "fmdClues": [
                        {
                            "inner": "FuVmT+FXruKaiJqb4/yztQrr4IjiQ66W15aQZoNgUQqRs72YJ/1njM9VWzVyg6VnmD5baNUrUHe/J4XcdxBEAgAAAAA="
                        },
                        {
                            "inner": "mh0/1s62ZXRoAinAVXixpE9UUgehvtoTfz44M7OZ+gl4YgTiZ2Gqz2LvzgDgKjq2hRi2y0J8JYN3RkmlyvMVAwAAAAA="
                        }
                    ]
                },
                "memo": {
                    "inner": "rvuRgLKSLN4WUPa2qb5Tmkxb87tEm8wBKFKkVRi5uXSe+0+oK6k5upTjuhcET8GIP/ScOdkDvMoAnUNVvz/C6JHAGVZLmRHjVrrROLYNcwBG2oxMgzNlcAYHr5RHc7sTCglrufKKpy595wvNLRiw3YknL834/YR+lN5nyg63NMc9p/RWKQPjyn0P3hz9bsnP3hacBZU1kjjRvNdfQrshfyySn/yGbF8eNVHc2Me68Zfb/Z42VPGNRmRCccRG5qf6fFBopnz+JvVT4165M3rcoeI+KtEb+ZEGc+MGC4GfRQywod33cXtHb8mlVqHjJWGIORkVMnSinRhAPijyGKkqKP/u1SZWzksQqY6hzoFbQVLVyoB/gIn11wlx9eBGXbL2479mycrFm+2/RHWYo5wCY+pw9XCW8Q/krO4G1HMTNb2SlDlNiCW212rDTZnJ7dE7VncCicKbU+Q/ImM/+KL8J6MjFtoCECa2dcDDuhjkQLIUR+j1miKEQxCmhJMVp7tYE/rCYeXjNM2K8RihdVXizOu0vgKncWPg7+2SSAn4XbghDNscivBUrWDt7NjQ9pEuAMj8IgFnxZZDkRG3HyyG0UypQC+Ej3RCVlYtXZ+FZiEJJm4/VClrWkMSjhW55vilUnhUqv2ZGTaLG2TC2xhIUvGz/4Ql3nnrg01PLRduErAFsPeHOOHwyA2eYEp7ltCC"
                }
            },
            "bindingSig": {
                "inner": "2ASd3W758nBl1HKtNF3D5m9r8LgItckRBlccNsPnCQANhR8Ff4aKoHK3tRbnFf0X3RXUxch4evH+DbisBJvzAQ=="
            },
            "anchor": {
                "inner": "fEwWV5cEUOo6pZ9ehZBBhgNo9824ozgYmDKUx9ukCA0="
            }
        },
        "perspective": {
            "payloadKeys": [
                {
                    "payloadKey": {
                        "inner": "Q5P5ViKNmyptNPQQGEZ+EcNb4Mj7tRzK7EBEq06e+OQ="
                    },
                    "commitment": {
                        "inner": "p3XL8M97GDJaPZPRo1RlcfjAtWhequa3X9WvfcKRfQE="
                    }
                },
                {
                    "payloadKey": {
                        "inner": "a6AjtAoLbRFnvwI8s/Wrt/c+bWGPsic60oLoj/XjBd0="
                    },
                    "commitment": {
                        "inner": "inmRlanc/c/34Gu4Dn1PLLK8WqV+yq657hIzOh4i4gw="
                    }
                }
            ],
            "spendNullifiers": [
                {
                    "nullifier": {
                        "inner": "+MnEVC/lEgr3tboBgiiHBGa7vTD96xAgnECW8pZd1AU="
                    },
                    "note": {
                        "value": {
                            "amount": {
                                "lo": "2074996168",
                                "hi": "0"
                            },
                            "assetId": {
                                "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                "altBech32m": "",
                                "altBaseDenom": ""
                            }
                        },
                        "rseed": "8RlnyAVv5a2HIg4fYF04009N5bfrnSR/6fZIDQN0KyA=",
                        "address": {
                            "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                            "altBech32m": ""
                        }
                    }
                }
            ],
            "adviceNotes": [],
            "addressViews": [
                {
                    "decoded": {
                        "address": {
                            "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                            "altBech32m": ""
                        },
                        "index": {
                            "account": 0,
                            "randomizer": ""
                        },
                        "walletId": {
                            "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                        }
                    }
                }
            ],
            "denoms": [
                {
                    "description": "",
                    "denomUnits": [
                        {
                            "denom": "delegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                            "exponent": 6,
                            "aliases": []
                        },
                        {
                            "denom": "mdelegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                            "exponent": 3,
                            "aliases": []
                        },
                        {
                            "denom": "udelegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                            "exponent": 0,
                            "aliases": []
                        }
                    ],
                    "base": "udelegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                    "display": "delegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                    "name": "",
                    "symbol": "delUM(xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa)",
                    "penumbraAssetId": {
                        "inner": "Um2RXXeng0wMA+LHj8DOPqFr36veafb029EK+2ItAQk=",
                        "altBech32m": "",
                        "altBaseDenom": ""
                    },
                    "images": [],
                    "priorityScore": "0",
                    "badges": [],
                    "coingeckoId": ""
                },
                {
                    "description": "The native token of Penumbra",
                    "denomUnits": [
                        {
                            "denom": "penumbra",
                            "exponent": 6,
                            "aliases": []
                        },
                        {
                            "denom": "mpenumbra",
                            "exponent": 3,
                            "aliases": []
                        },
                        {
                            "denom": "upenumbra",
                            "exponent": 0,
                            "aliases": []
                        }
                    ],
                    "base": "upenumbra",
                    "display": "penumbra",
                    "name": "Penumbra",
                    "symbol": "UM",
                    "penumbraAssetId": {
                        "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                        "altBech32m": "",
                        "altBaseDenom": ""
                    },
                    "images": [
                        {
                            "png": "",
                            "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                            "theme": {
                                "primaryColorHex": "#c9a975",
                                "circle": false,
                                "darkMode": false
                            }
                        }
                    ],
                    "priorityScore": "999999999999",
                    "badges": [],
                    "coingeckoId": "penumbra"
                }
            ],
            "transactionId": {
                "inner": "FAcZ849Z1W2O/axI4P1cw/xoKP7h72PfjAk+Xa8Xl2o="
            },
            "prices": [],
            "extendedMetadata": [],
            "creationTransactionIdsByNullifier": [],
            "nullificationTransactionIdsByCommitment": [],
            "batchSwapOutputData": []
        },
        "view": {
            "bodyView": {
                "actionViews": [
                    {
                        "spend": {
                            "visible": {
                                "spend": {
                                    "body": {
                                        "balanceCommitment": {
                                            "inner": "kCZqgWarnqQyaaJNwRc1FxIeGzNcFHE4rf8kVMOt1g4="
                                        },
                                        "rk": {
                                            "inner": "etZXR7WbsFOGMMFYn7CRYknyvTwl7FBQCLrnrYN34AA="
                                        },
                                        "nullifier": {
                                            "inner": "+MnEVC/lEgr3tboBgiiHBGa7vTD96xAgnECW8pZd1AU="
                                        },
                                        "encryptedBackref": "IZ8vbO22AQqURNZkVTh/RAnl7/Yz1gWk1J79d99FR6ImwOKq5jp94bN4x+WLP1ll"
                                    },
                                    "authSig": {
                                        "inner": "mOziRzesDynvbgt4K2JOzcgsmyxcd5c9pm1vDBWLIxGvj17QGQpUChcOFHqHz6W9a8y7ghFfhIOGpJKDpARLAA=="
                                    },
                                    "proof": {
                                        "inner": "mo82ZEmrA+tEcIia8g+/cLLLNUGdLpEwpgRqIUgYKx+TaUfD2TD7owThhbQuxpyADiP2V69NXcjToHZtVPIvLrXEF/AHP47sg1R1gQUpuHGjFkIAdvqNITVrLWOhgiYAopbBh2zQufvZCWeMJxIEWrkepjnZAOpRNt6Ha4l3CA+8J2C7nMjZYd09AW1b6DyBZ5s6L3uJD3rPEfDAVOuAgPBG3gYoglTU8b5SCEfB0IPKvdBriHVExD/W6kpFnBaB"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "2074996168",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "The native token of Penumbra",
                                                "denomUnits": [
                                                    {
                                                        "denom": "penumbra",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "mpenumbra",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "upenumbra",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "upenumbra",
                                                "display": "penumbra",
                                                "name": "Penumbra",
                                                "symbol": "UM",
                                                "penumbraAssetId": {
                                                    "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "",
                                                        "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#c9a975",
                                                            "circle": false,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "999999999999",
                                                "badges": [],
                                                "coingeckoId": "penumbra"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "8RlnyAVv5a2HIg4fYF04009N5bfrnSR/6fZIDQN0KyA=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    {
                        "output": {
                            "visible": {
                                "output": {
                                    "body": {
                                        "notePayload": {
                                            "noteCommitment": {
                                                "inner": "inmRlanc/c/34Gu4Dn1PLLK8WqV+yq657hIzOh4i4gw="
                                            },
                                            "ephemeralKey": "6CVtnTGDUAyDyZOg26sMkiQK5Z0fLaOEtfNN9FfY7xE=",
                                            "encryptedNote": {
                                                "inner": "iFLB7IxN98T0Grs7eJF6j5AudvLcBmSADHIylQtnab/8UeRg26ow4UYkpZVLXSAj4J7VXSxM2PBQj4DRm7qBpOlieYVztfOo19lxusrgIE6hL33BZN410qAqI0oJ0cqhv0LK9NPfiJTmceDuxRHhYmXEgzpuxGfJbFleiBzv+if3sxPwWr4MPyUf4QIioDCJTlg7JhrpAnvsf1ZneZAuqH4RIvrgKcoTZ3WmtEHqa54="
                                            }
                                        },
                                        "balanceCommitment": {
                                            "inner": "hq2ZrT0w+WLmz1mRfV3AaNl5LqcJQRSdBQkX2HL3VgQ="
                                        },
                                        "wrappedMemoKey": "p3WV7cxltipQLcmseLXfpRr+9KfpVU+B8AX49eLnuDe4tJNSJYerAyfKAJ7MDUWm",
                                        "ovkWrappedKey": "BdJmZP4/If73h3em0Rc+mnikaw4hmmUBA3H+FhbU8BzAwcI5o0b3hRv3s3RN3027"
                                    },
                                    "proof": {
                                        "inner": "89VwTatjNPuthQbgFP0hyVVqv8W3tBi6GtQz/CyMjP+gxcZZc/qNnVMldz8vhTYAGJo2RO4TNMjyE8Ak1W/rLnKzt9DrnSLZ+2j09LcWm9W+x1fxXdJo/2MoRWXu3jkA4dnALq6z66ymkPJp8JRf53SuFiqHKtRqnVHrE+88SjJ1c/6y0U+i8J6A2pAQXkUB1IVMa012CxsZcDkmFM1U71ln7Ytv0RMyq3gD4KhVONlM2mO8cH+LmjL0dR9gK1yA"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "68604594",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "",
                                                "denomUnits": [
                                                    {
                                                        "denom": "delegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "mdelegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "udelegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "udelegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                "display": "delegation_penumbravalid1xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa",
                                                "name": "",
                                                "symbol": "delUM(xsre9zlumhcmkrpz3nmu3j74dw97hw6rky93qs8untvw0qt54crsj3hxaa)",
                                                "penumbraAssetId": {
                                                    "inner": "Um2RXXeng0wMA+LHj8DOPqFr36veafb029EK+2ItAQk=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [],
                                                "priorityScore": "0",
                                                "badges": [],
                                                "coingeckoId": ""
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "y+q0oqOm3n6c1AYMaJ0ibkVnBoTGbbUpFhbt/mEUT2o=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                },
                                "payloadKey": {
                                    "inner": "a3AWLgRi8vSFW1ya+CwdrQmVUG4uDLceMDedfB0keB4="
                                }
                            }
                        }
                    },
                    {
                        "output": {
                            "visible": {
                                "output": {
                                    "body": {
                                        "notePayload": {
                                            "noteCommitment": {
                                                "inner": "p3XL8M97GDJaPZPRo1RlcfjAtWhequa3X9WvfcKRfQE="
                                            },
                                            "ephemeralKey": "CNAD7tmQJv+cYlJ+cLPA2j3Rtrb9RYCOAVnukfuKxA0=",
                                            "encryptedNote": {
                                                "inner": "hooBCPAZ4Ud1JAMHQzM5E/1ABk4j8bfjt4WRuf6lizy5fQ0GkiiUY5FwukIokz68dD/BIWUu9uPAzxJc842hhIopOY3hAMuCwlQ8+JsECJlMDCigaEERITE28HnemgkuOQr5K2RemrDBLFEW0cY7xJc8wuR/Xlv2iOczMtVouiTdUryhHKYV6Q3Pg2Mj4aOMQdLbAGHV/gKfvdNf/G07Atn+bMyDcH/R3EmdGs45BHo="
                                            }
                                        },
                                        "balanceCommitment": {
                                            "inner": "Nurth5PP3lAMxOaLZU7qZWHwkg8N6is94LUyQ1f5XQQ="
                                        },
                                        "wrappedMemoKey": "vU+OKyBHxzZQJeW1vhj7X+EuO0le4B51Nh/5c6DJmfFz2rVg4+yNLJu6Zo7KuzLC",
                                        "ovkWrappedKey": "YKmY484B70myGbf8UqqbgCwUM67QDJZHPZwZoRqQE+kA9k5eX++Nx5gVGjBwJzFd"
                                    },
                                    "proof": {
                                        "inner": "AeU0Enxci/VwaxhuGimwcFj6EjaPQWvBYcK3VQrjN8MskpJOnTfXNJjHxUvO9yAA8Bgka+4Nm/qRc+QOKkHdw0Ceyy7to//W04QFIu1kYtXQOIG40DCLh8yItXZM4l0AhFyf6RGdHUi+TYqGm+M9C0Gz/1AUfGBpyHNEfEGjKMgw1e4oiDbRh/EfMmwRhtKAk/Bp3K86waus3GSigbj+Cr+XmguCjP3AWd+QGtkuzSolWjFwGA4WnWMEk5QV8iAB"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "2004995231",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "The native token of Penumbra",
                                                "denomUnits": [
                                                    {
                                                        "denom": "penumbra",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "mpenumbra",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "upenumbra",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "upenumbra",
                                                "display": "penumbra",
                                                "name": "Penumbra",
                                                "symbol": "UM",
                                                "penumbraAssetId": {
                                                    "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "",
                                                        "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#c9a975",
                                                            "circle": false,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "999999999999",
                                                "badges": [],
                                                "coingeckoId": "penumbra"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "fQsEbLqAiwi+/IK6vpHAt36jQpX6YrZoSJfsrH9wGyc=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                },
                                "payloadKey": {
                                    "inner": "a3AWLgRi8vSFW1ya+CwdrQmVUG4uDLceMDedfB0keB4="
                                }
                            }
                        }
                    },
                    {
                        "delegate": {
                            "validatorIdentity": {
                                "ik": "NAeSi/zd8bsMIoz3yMvVa4vru0OxCxBA/JrY54F0rgc="
                            },
                            "epochIndex": "152",
                            "unbondedAmount": {
                                "lo": "70000000",
                                "hi": "0"
                            },
                            "delegationAmount": {
                                "lo": "68604594",
                                "hi": "0"
                            }
                        }
                    }
                ],
                "transactionParameters": {
                    "expiryHeight": "0",
                    "chainId": "penumbra-1",
                    "fee": {
                        "amount": {
                            "lo": "937",
                            "hi": "0"
                        }
                    }
                },
                "detectionData": {
                    "fmdClues": [
                        {
                            "inner": "FuVmT+FXruKaiJqb4/yztQrr4IjiQ66W15aQZoNgUQqRs72YJ/1njM9VWzVyg6VnmD5baNUrUHe/J4XcdxBEAgAAAAA="
                        },
                        {
                            "inner": "mh0/1s62ZXRoAinAVXixpE9UUgehvtoTfz44M7OZ+gl4YgTiZ2Gqz2LvzgDgKjq2hRi2y0J8JYN3RkmlyvMVAwAAAAA="
                        }
                    ]
                },
                "memoView": {
                    "visible": {
                        "ciphertext": {
                            "inner": "rvuRgLKSLN4WUPa2qb5Tmkxb87tEm8wBKFKkVRi5uXSe+0+oK6k5upTjuhcET8GIP/ScOdkDvMoAnUNVvz/C6JHAGVZLmRHjVrrROLYNcwBG2oxMgzNlcAYHr5RHc7sTCglrufKKpy595wvNLRiw3YknL834/YR+lN5nyg63NMc9p/RWKQPjyn0P3hz9bsnP3hacBZU1kjjRvNdfQrshfyySn/yGbF8eNVHc2Me68Zfb/Z42VPGNRmRCccRG5qf6fFBopnz+JvVT4165M3rcoeI+KtEb+ZEGc+MGC4GfRQywod33cXtHb8mlVqHjJWGIORkVMnSinRhAPijyGKkqKP/u1SZWzksQqY6hzoFbQVLVyoB/gIn11wlx9eBGXbL2479mycrFm+2/RHWYo5wCY+pw9XCW8Q/krO4G1HMTNb2SlDlNiCW212rDTZnJ7dE7VncCicKbU+Q/ImM/+KL8J6MjFtoCECa2dcDDuhjkQLIUR+j1miKEQxCmhJMVp7tYE/rCYeXjNM2K8RihdVXizOu0vgKncWPg7+2SSAn4XbghDNscivBUrWDt7NjQ9pEuAMj8IgFnxZZDkRG3HyyG0UypQC+Ej3RCVlYtXZ+FZiEJJm4/VClrWkMSjhW55vilUnhUqv2ZGTaLG2TC2xhIUvGz/4Ql3nnrg01PLRduErAFsPeHOOHwyA2eYEp7ltCC"
                        },
                        "plaintext": {
                            "returnAddress": {
                                "decoded": {
                                    "address": {
                                        "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                        "altBech32m": ""
                                    },
                                    "index": {
                                        "account": 0,
                                        "randomizer": ""
                                    },
                                    "walletId": {
                                        "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                    }
                                }
                            },
                            "text": ""
                        }
                    }
                }
            },
            "bindingSig": {
                "inner": "2ASd3W758nBl1HKtNF3D5m9r8LgItckRBlccNsPnCQANhR8Ff4aKoHK3tRbnFf0X3RXUxch4evH+DbisBJvzAQ=="
            },
            "anchor": {
                "inner": "fEwWV5cEUOo6pZ9ehZBBhgNo9824ozgYmDKUx9ukCA0="
            }
        },
        "summary": {
            "effects": [
                {
                    "address": {
                        "opaque": {
                            "address": {
                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                "altBech32m": ""
                            }
                        }
                    },
                    "balance": {
                        "values": [
                            {
                                "value": {
                                    "amount": {
                                        "lo": "68604594",
                                        "hi": "0"
                                    },
                                    "assetId": {
                                        "inner": "Um2RXXeng0wMA+LHj8DOPqFr36veafb029EK+2ItAQk=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    }
                                },
                                "negated": true
                            },
                            {
                                "value": {
                                    "amount": {
                                        "lo": "70000937",
                                        "hi": "0"
                                    },
                                    "assetId": {
                                        "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    }
                                },
                                "negated": false
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        "height": "3954673",
        "id": {
            "inner": "ojbJg7e1phsUBokW7U0DUoadkUJiBgJqa8JlgLIDt+s="
        },
        "transaction": {
            "body": {
                "actions": [
                    {
                        "spend": {
                            "body": {
                                "balanceCommitment": {
                                    "inner": "jpg5rLkYAYv0uhAvWRe2NDKPKhDtyc78hitwSGmRnQM="
                                },
                                "rk": {
                                    "inner": "Mrdf/cXutd2gSABjgwCQAMpo/Bd/whYYS47D+tbQvg8="
                                },
                                "nullifier": {
                                    "inner": "xBEvJQCcFSyPoVjtBonE6fvb8mXZeVICn8J1gGLOpwM="
                                },
                                "encryptedBackref": "eHmgOizEZq56ZoaTL4AkTyXfBfsRJLOGfyFZwdkp9CvejiY2vYLxD6zr3OEUK4JU"
                            },
                            "authSig": {
                                "inner": "zK3W8e98v2eyvR1lCkWeoXrnHVzqDRR0r6JjXiVgMgTnKfojttk/4NC2ZwACQZ6L4D9AonLPBhRF8ujhHWYTAg=="
                            },
                            "proof": {
                                "inner": "VYB4clX4q2Khj1hU4JgDugbpCpx1RxPzwyJ5PYJ23yhUIsyn+RTcWCBN+CnYHiwAQg9pirlw12rdWk41Ry6p5/ctIjZHcuHBUi3KNCnPs4l4Wbir2bTnlqFdauMjW6wAE2Mc8W2HU4I1/GA1jYN9IBcs1eCgGsvP4glGP/xSHgM/XqgD2l6X6h5ZV/zdmqOAm4ctGoRRq2qWblbv5p6TI1/ybSHH8dwBG1w9L7hHnLNJWOMyByM063WxAfIyhVmA"
                            }
                        }
                    },
                    {
                        "output": {
                            "body": {
                                "notePayload": {
                                    "noteCommitment": {
                                        "inner": "2oO/ghzgjYJjRdj/2o8/rCU/L4qVCpsMDzlR+6fw9Qc="
                                    },
                                    "ephemeralKey": "cj0TGMYo4ykvYXWCZz3bXnfkSEcqf4P7F4f7f1U6AhA=",
                                    "encryptedNote": {
                                        "inner": "Y95G77Gv9jbKp/MthV+hs5yiF4wfWGzf8yOHSpKcIqyUdkd+Y4ggVfirXU+L/9n5mbbVq4ObgzXqXCb7VeB4fiiY0bcgXGYEX0uQiKzRD3AOt3qrJoykDglgtXdm51pP0H92/60TKpuF1LTo9jU2/fSI9IH7N8Us+4JHyxH9w4HxifjVcT1StWxxmBQs2a7V3xZqMQB3uJSFo7747/JTrnYVwFKLCZDu7LtBzzr3pM4="
                                    }
                                },
                                "balanceCommitment": {
                                    "inner": "XA7Fs70IlJUzV5+nd6TlWB4T0w/oPvlmhwggeUKKvwk="
                                },
                                "wrappedMemoKey": "q/TH153YIcltP3+DxwJBpWkP9q4LnI8anoLYmKNmBhCPTkLZ/n60g8pDvgElNqfQ",
                                "ovkWrappedKey": "30fd4nOpXTgOU3/gdwxbll13LHpAFThOB1RmvGnju6B2AfpJ5qmoPhPkb2STuS0a"
                            },
                            "proof": {
                                "inner": "XLm6T+5TpgycqRIaYfr5YgZuX9HzV9iuhiwf8FOIRA3RzWhU/EM6+VqrHtQZW7WAc5l6IRu7F7uTYftgveIqq/hN9VmY5rHHIf+jNqngGv/hTpKBCLFSDos9ptT3WZMBPjCvfymonJmLVi8cszuenbmfD5NOeNxZz0tpsjtQoTHCwDKg6CwFXWR3wI6/fDyB81k05gu0gVYAED9wnQHskqVvenUX+ckraI/gN8WIkd60G4nw0xc7tIoOPwPUylOA"
                            }
                        }
                    },
                    {
                        "output": {
                            "body": {
                                "notePayload": {
                                    "noteCommitment": {
                                        "inner": "5VXkg4T3koDaFAf78MWwkc23rr6K4MNyEunZ1Oo3FQU="
                                    },
                                    "ephemeralKey": "OFGpyr/uB74ouE4Yd9zDe1Y2Pe/KuoCLq6fksbHl+g8=",
                                    "encryptedNote": {
                                        "inner": "j/ofkLWETsqmsRLc95UPuQFqeSiRKyUk2zuQxcBa+GT5kw+lSt9TbOV54ULzzLSnXRlxpFNLlBp0pzsjRJBe1VZePAbyNiEExOL7GQuwh5/IX+5/3AV2hJ9bcyYI6Q+BDqJS8q7HGSuEXyfwYfkz418U3rxpuJhFqzHjLfW3uFCdP9wR1T6FeHXTxHdxQFNLqPzrj4q4nIC+l+SY5hKEE3wlDDZFZ8+aAoy2NVEr+vQ="
                                    }
                                },
                                "balanceCommitment": {
                                    "inner": "yLyvA0ZqlO8tlCapG7CyiPxRHQXbXjtTUEZDwm1IjQM="
                                },
                                "wrappedMemoKey": "cSP2sTyMU9je4tsag28lPznXuAmpM2p4Gw4/GMPupw7VLIeU9tL/su1z/13wmzbM",
                                "ovkWrappedKey": "//oz1N0Zm2FlI3a06iIhhbHZshq2YUpYpmsVmCBoDhJH3DoJI+lga191iA115/qo"
                            },
                            "proof": {
                                "inner": "Jhy4QX8kV8qyUApfxxPpdtm//0hRpHjjLdRS/g4/kLd9nZao+ldrbNg0BsmsJw6A95XCRnotKDT981KXhjJwQ/UwCmtcg3Fm4ZZXsTRd6Q+Js38GeJwJQtrEeRLuZUUAFdptPa1ugtbNg1LK2y34SSGyTSHaChpOgayX8x52XYSFO9XvvIZ3WX9pQQU4HioAEWpHLAbqkkM5L1OUklKI9wYt/JDi9/xlK4U5GnTyATKOiBtajIbcZcfgtuD+aXgB"
                            }
                        }
                    }
                ],
                "transactionParameters": {
                    "expiryHeight": "0",
                    "chainId": "penumbra-1",
                    "fee": {
                        "amount": {
                            "lo": "934",
                            "hi": "0"
                        }
                    }
                },
                "detectionData": {
                    "fmdClues": [
                        {
                            "inner": "3sjJInn5aAGSqZrldUGuX/IL+Ki3isNMioqILsahCRJDbT101s/eu1/c5p/bwTfvX4pPuR70RCssSItI/16MAwAAAAA="
                        },
                        {
                            "inner": "pFb4uw7pbLj1q114+BajX0LAQA3Wywg6KzwdTHVHrgN0UiT1yWID1v5asQstEgcfVqoNOr5cw30od+PvyP6IAgAAAAA="
                        }
                    ]
                },
                "memo": {
                    "inner": "qvQhbaNGvSMgaWpsjr7At93uuWtC++xdR7zxFq4IVlehlM+f/+wxnhW5+0nCKi2Z6lr6cFoGr9O3wV3OoaMIVa53hGYeHel6emEGGA1sjHDfmKUljQXMLCdvU2tKr6HTcI03EepH2pSlX6qqx9aJ287hjXdoCuRrCVzGmOFiPJESupwHAJblhy/mKBrmTSYFUjIvANutrzCpv0WurVhb5UFVWjFn7dJnUlDnDvVG8tpXPfEOComHwZlIZo4qaqqFk+1pWvku8DsZnrXq75LAnByqcBcVGpEJMwE4iBJpfBPmF0oOf/IeiXDe1sLnFhrKVDi7mm02/SxcVDXGG1C6kMraSRFw1fpDRVe4TOPSq4ns+3Ij+pjhqXbG1IFwN0SABZij0O93sflxuAvyhyv94HZLjO3KFPcxZthIgCNfpdTLkhC2kNEr31myJ41x531BgXSUsxq4T9fD3LxxIUM1A6GYvHcIpP8oFeGmeZ3d7CZqWDrX0SIi5kEiHHCfp+XFdMOHOndeUnuJflP8i6X77ur2baFT9vAdFk/CMtxxWQ9X3tSE70wP75q85OYAVCPJc0CdT565R+jaQxcMx8q3W+MIzCIKCFiI7d644EWk8XbGyILW+dSSqcM9ZGcFDeHlxtcIJAspT5chI//t1hjKE7U5IGbM/i2jP0D1C2HvswK8z8lFQYhaSbwV5poMU7la"
                }
            },
            "bindingSig": {
                "inner": "PmJkrnE+HNLEJ55x7jmfzFNhpfY7qJT2hm0TdDUWtwS8DF9tlUljii+ZITcPGRHHhsWPwQftW/RVBRMdAfk3AA=="
            },
            "anchor": {
                "inner": "dICfa6Jst964dZIgf0baIe2Wdh1Hdx/dRMe0YBWKdQI="
            }
        },
        "perspective": {
            "payloadKeys": [
                {
                    "payloadKey": {
                        "inner": "Is9EPyLIT232l2yvS92dqk1qLaQoTq4z4Mkfhia2sW4="
                    },
                    "commitment": {
                        "inner": "5VXkg4T3koDaFAf78MWwkc23rr6K4MNyEunZ1Oo3FQU="
                    }
                },
                {
                    "payloadKey": {
                        "inner": "cl1lZyLQ+o41vnrv6Ut1dtXGpy7Wg60Z0JeaRiQfeJI="
                    },
                    "commitment": {
                        "inner": "2oO/ghzgjYJjRdj/2o8/rCU/L4qVCpsMDzlR+6fw9Qc="
                    }
                }
            ],
            "spendNullifiers": [
                {
                    "nullifier": {
                        "inner": "xBEvJQCcFSyPoVjtBonE6fvb8mXZeVICn8J1gGLOpwM="
                    },
                    "note": {
                        "value": {
                            "amount": {
                                "lo": "2124997102",
                                "hi": "0"
                            },
                            "assetId": {
                                "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                "altBech32m": "",
                                "altBaseDenom": ""
                            }
                        },
                        "rseed": "AmxMvj3RK5HUV7JCcf1/e0n9sjYSefBIVTWTg8R70Ak=",
                        "address": {
                            "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                            "altBech32m": ""
                        }
                    }
                }
            ],
            "adviceNotes": [],
            "addressViews": [
                {
                    "opaque": {
                        "address": {
                            "inner": "ZhOHChoX1q2NcXNxAi5pOhuTWMmqyr5+xZN6cVkaqvnF/zb8TdOT66msXfPjpB2DzoTBuOkHuXZ0vNoy7RXEKK0XgkVHlnY/9OlZYXsVz3Q=",
                            "altBech32m": ""
                        }
                    }
                },
                {
                    "decoded": {
                        "address": {
                            "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                            "altBech32m": ""
                        },
                        "index": {
                            "account": 0,
                            "randomizer": ""
                        },
                        "walletId": {
                            "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                        }
                    }
                }
            ],
            "denoms": [
                {
                    "description": "The native token of Penumbra",
                    "denomUnits": [
                        {
                            "denom": "penumbra",
                            "exponent": 6,
                            "aliases": []
                        },
                        {
                            "denom": "mpenumbra",
                            "exponent": 3,
                            "aliases": []
                        },
                        {
                            "denom": "upenumbra",
                            "exponent": 0,
                            "aliases": []
                        }
                    ],
                    "base": "upenumbra",
                    "display": "penumbra",
                    "name": "Penumbra",
                    "symbol": "UM",
                    "penumbraAssetId": {
                        "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                        "altBech32m": "",
                        "altBaseDenom": ""
                    },
                    "images": [
                        {
                            "png": "",
                            "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                            "theme": {
                                "primaryColorHex": "#c9a975",
                                "circle": false,
                                "darkMode": false
                            }
                        }
                    ],
                    "priorityScore": "999999999999",
                    "badges": [],
                    "coingeckoId": "penumbra"
                }
            ],
            "transactionId": {
                "inner": "ojbJg7e1phsUBokW7U0DUoadkUJiBgJqa8JlgLIDt+s="
            },
            "prices": [],
            "extendedMetadata": [],
            "creationTransactionIdsByNullifier": [],
            "nullificationTransactionIdsByCommitment": [],
            "batchSwapOutputData": []
        },
        "view": {
            "bodyView": {
                "actionViews": [
                    {
                        "spend": {
                            "visible": {
                                "spend": {
                                    "body": {
                                        "balanceCommitment": {
                                            "inner": "jpg5rLkYAYv0uhAvWRe2NDKPKhDtyc78hitwSGmRnQM="
                                        },
                                        "rk": {
                                            "inner": "Mrdf/cXutd2gSABjgwCQAMpo/Bd/whYYS47D+tbQvg8="
                                        },
                                        "nullifier": {
                                            "inner": "xBEvJQCcFSyPoVjtBonE6fvb8mXZeVICn8J1gGLOpwM="
                                        },
                                        "encryptedBackref": "eHmgOizEZq56ZoaTL4AkTyXfBfsRJLOGfyFZwdkp9CvejiY2vYLxD6zr3OEUK4JU"
                                    },
                                    "authSig": {
                                        "inner": "zK3W8e98v2eyvR1lCkWeoXrnHVzqDRR0r6JjXiVgMgTnKfojttk/4NC2ZwACQZ6L4D9AonLPBhRF8ujhHWYTAg=="
                                    },
                                    "proof": {
                                        "inner": "VYB4clX4q2Khj1hU4JgDugbpCpx1RxPzwyJ5PYJ23yhUIsyn+RTcWCBN+CnYHiwAQg9pirlw12rdWk41Ry6p5/ctIjZHcuHBUi3KNCnPs4l4Wbir2bTnlqFdauMjW6wAE2Mc8W2HU4I1/GA1jYN9IBcs1eCgGsvP4glGP/xSHgM/XqgD2l6X6h5ZV/zdmqOAm4ctGoRRq2qWblbv5p6TI1/ybSHH8dwBG1w9L7hHnLNJWOMyByM063WxAfIyhVmA"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "2124997102",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "The native token of Penumbra",
                                                "denomUnits": [
                                                    {
                                                        "denom": "penumbra",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "mpenumbra",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "upenumbra",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "upenumbra",
                                                "display": "penumbra",
                                                "name": "Penumbra",
                                                "symbol": "UM",
                                                "penumbraAssetId": {
                                                    "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "",
                                                        "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#c9a975",
                                                            "circle": false,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "999999999999",
                                                "badges": [],
                                                "coingeckoId": "penumbra"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "AmxMvj3RK5HUV7JCcf1/e0n9sjYSefBIVTWTg8R70Ak=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    {
                        "output": {
                            "visible": {
                                "output": {
                                    "body": {
                                        "notePayload": {
                                            "noteCommitment": {
                                                "inner": "2oO/ghzgjYJjRdj/2o8/rCU/L4qVCpsMDzlR+6fw9Qc="
                                            },
                                            "ephemeralKey": "cj0TGMYo4ykvYXWCZz3bXnfkSEcqf4P7F4f7f1U6AhA=",
                                            "encryptedNote": {
                                                "inner": "Y95G77Gv9jbKp/MthV+hs5yiF4wfWGzf8yOHSpKcIqyUdkd+Y4ggVfirXU+L/9n5mbbVq4ObgzXqXCb7VeB4fiiY0bcgXGYEX0uQiKzRD3AOt3qrJoykDglgtXdm51pP0H92/60TKpuF1LTo9jU2/fSI9IH7N8Us+4JHyxH9w4HxifjVcT1StWxxmBQs2a7V3xZqMQB3uJSFo7747/JTrnYVwFKLCZDu7LtBzzr3pM4="
                                            }
                                        },
                                        "balanceCommitment": {
                                            "inner": "XA7Fs70IlJUzV5+nd6TlWB4T0w/oPvlmhwggeUKKvwk="
                                        },
                                        "wrappedMemoKey": "q/TH153YIcltP3+DxwJBpWkP9q4LnI8anoLYmKNmBhCPTkLZ/n60g8pDvgElNqfQ",
                                        "ovkWrappedKey": "30fd4nOpXTgOU3/gdwxbll13LHpAFThOB1RmvGnju6B2AfpJ5qmoPhPkb2STuS0a"
                                    },
                                    "proof": {
                                        "inner": "XLm6T+5TpgycqRIaYfr5YgZuX9HzV9iuhiwf8FOIRA3RzWhU/EM6+VqrHtQZW7WAc5l6IRu7F7uTYftgveIqq/hN9VmY5rHHIf+jNqngGv/hTpKBCLFSDos9ptT3WZMBPjCvfymonJmLVi8cszuenbmfD5NOeNxZz0tpsjtQoTHCwDKg6CwFXWR3wI6/fDyB81k05gu0gVYAED9wnQHskqVvenUX+ckraI/gN8WIkd60G4nw0xc7tIoOPwPUylOA"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "50000000",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "The native token of Penumbra",
                                                "denomUnits": [
                                                    {
                                                        "denom": "penumbra",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "mpenumbra",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "upenumbra",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "upenumbra",
                                                "display": "penumbra",
                                                "name": "Penumbra",
                                                "symbol": "UM",
                                                "penumbraAssetId": {
                                                    "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "",
                                                        "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#c9a975",
                                                            "circle": false,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "999999999999",
                                                "badges": [],
                                                "coingeckoId": "penumbra"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "SjyUTCU9rUeT9AY21ZsMimX1eJQAVX6g47tW9gS8x8Y=",
                                    "address": {
                                        "opaque": {
                                            "address": {
                                                "inner": "ZhOHChoX1q2NcXNxAi5pOhuTWMmqyr5+xZN6cVkaqvnF/zb8TdOT66msXfPjpB2DzoTBuOkHuXZ0vNoy7RXEKK0XgkVHlnY/9OlZYXsVz3Q=",
                                                "altBech32m": ""
                                            }
                                        }
                                    }
                                },
                                "payloadKey": {
                                    "inner": "6v+qPzuzqm6U0e0NbTp3XdzQdHFemdxIJLeCtig+iwc="
                                }
                            }
                        }
                    },
                    {
                        "output": {
                            "visible": {
                                "output": {
                                    "body": {
                                        "notePayload": {
                                            "noteCommitment": {
                                                "inner": "5VXkg4T3koDaFAf78MWwkc23rr6K4MNyEunZ1Oo3FQU="
                                            },
                                            "ephemeralKey": "OFGpyr/uB74ouE4Yd9zDe1Y2Pe/KuoCLq6fksbHl+g8=",
                                            "encryptedNote": {
                                                "inner": "j/ofkLWETsqmsRLc95UPuQFqeSiRKyUk2zuQxcBa+GT5kw+lSt9TbOV54ULzzLSnXRlxpFNLlBp0pzsjRJBe1VZePAbyNiEExOL7GQuwh5/IX+5/3AV2hJ9bcyYI6Q+BDqJS8q7HGSuEXyfwYfkz418U3rxpuJhFqzHjLfW3uFCdP9wR1T6FeHXTxHdxQFNLqPzrj4q4nIC+l+SY5hKEE3wlDDZFZ8+aAoy2NVEr+vQ="
                                            }
                                        },
                                        "balanceCommitment": {
                                            "inner": "yLyvA0ZqlO8tlCapG7CyiPxRHQXbXjtTUEZDwm1IjQM="
                                        },
                                        "wrappedMemoKey": "cSP2sTyMU9je4tsag28lPznXuAmpM2p4Gw4/GMPupw7VLIeU9tL/su1z/13wmzbM",
                                        "ovkWrappedKey": "//oz1N0Zm2FlI3a06iIhhbHZshq2YUpYpmsVmCBoDhJH3DoJI+lga191iA115/qo"
                                    },
                                    "proof": {
                                        "inner": "Jhy4QX8kV8qyUApfxxPpdtm//0hRpHjjLdRS/g4/kLd9nZao+ldrbNg0BsmsJw6A95XCRnotKDT981KXhjJwQ/UwCmtcg3Fm4ZZXsTRd6Q+Js38GeJwJQtrEeRLuZUUAFdptPa1ugtbNg1LK2y34SSGyTSHaChpOgayX8x52XYSFO9XvvIZ3WX9pQQU4HioAEWpHLAbqkkM5L1OUklKI9wYt/JDi9/xlK4U5GnTyATKOiBtajIbcZcfgtuD+aXgB"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "2074996168",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "The native token of Penumbra",
                                                "denomUnits": [
                                                    {
                                                        "denom": "penumbra",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "mpenumbra",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "upenumbra",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "upenumbra",
                                                "display": "penumbra",
                                                "name": "Penumbra",
                                                "symbol": "UM",
                                                "penumbraAssetId": {
                                                    "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "",
                                                        "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#c9a975",
                                                            "circle": false,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "999999999999",
                                                "badges": [],
                                                "coingeckoId": "penumbra"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "8RlnyAVv5a2HIg4fYF04009N5bfrnSR/6fZIDQN0KyA=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                },
                                "payloadKey": {
                                    "inner": "6v+qPzuzqm6U0e0NbTp3XdzQdHFemdxIJLeCtig+iwc="
                                }
                            }
                        }
                    }
                ],
                "transactionParameters": {
                    "expiryHeight": "0",
                    "chainId": "penumbra-1",
                    "fee": {
                        "amount": {
                            "lo": "934",
                            "hi": "0"
                        }
                    }
                },
                "detectionData": {
                    "fmdClues": [
                        {
                            "inner": "3sjJInn5aAGSqZrldUGuX/IL+Ki3isNMioqILsahCRJDbT101s/eu1/c5p/bwTfvX4pPuR70RCssSItI/16MAwAAAAA="
                        },
                        {
                            "inner": "pFb4uw7pbLj1q114+BajX0LAQA3Wywg6KzwdTHVHrgN0UiT1yWID1v5asQstEgcfVqoNOr5cw30od+PvyP6IAgAAAAA="
                        }
                    ]
                },
                "memoView": {
                    "visible": {
                        "ciphertext": {
                            "inner": "qvQhbaNGvSMgaWpsjr7At93uuWtC++xdR7zxFq4IVlehlM+f/+wxnhW5+0nCKi2Z6lr6cFoGr9O3wV3OoaMIVa53hGYeHel6emEGGA1sjHDfmKUljQXMLCdvU2tKr6HTcI03EepH2pSlX6qqx9aJ287hjXdoCuRrCVzGmOFiPJESupwHAJblhy/mKBrmTSYFUjIvANutrzCpv0WurVhb5UFVWjFn7dJnUlDnDvVG8tpXPfEOComHwZlIZo4qaqqFk+1pWvku8DsZnrXq75LAnByqcBcVGpEJMwE4iBJpfBPmF0oOf/IeiXDe1sLnFhrKVDi7mm02/SxcVDXGG1C6kMraSRFw1fpDRVe4TOPSq4ns+3Ij+pjhqXbG1IFwN0SABZij0O93sflxuAvyhyv94HZLjO3KFPcxZthIgCNfpdTLkhC2kNEr31myJ41x531BgXSUsxq4T9fD3LxxIUM1A6GYvHcIpP8oFeGmeZ3d7CZqWDrX0SIi5kEiHHCfp+XFdMOHOndeUnuJflP8i6X77ur2baFT9vAdFk/CMtxxWQ9X3tSE70wP75q85OYAVCPJc0CdT565R+jaQxcMx8q3W+MIzCIKCFiI7d644EWk8XbGyILW+dSSqcM9ZGcFDeHlxtcIJAspT5chI//t1hjKE7U5IGbM/i2jP0D1C2HvswK8z8lFQYhaSbwV5poMU7la"
                        },
                        "plaintext": {
                            "returnAddress": {
                                "decoded": {
                                    "address": {
                                        "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                        "altBech32m": ""
                                    },
                                    "index": {
                                        "account": 0,
                                        "randomizer": ""
                                    },
                                    "walletId": {
                                        "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                    }
                                }
                            },
                            "text": "Gift to a friend!"
                        }
                    }
                }
            },
            "bindingSig": {
                "inner": "PmJkrnE+HNLEJ55x7jmfzFNhpfY7qJT2hm0TdDUWtwS8DF9tlUljii+ZITcPGRHHhsWPwQftW/RVBRMdAfk3AA=="
            },
            "anchor": {
                "inner": "dICfa6Jst964dZIgf0baIe2Wdh1Hdx/dRMe0YBWKdQI="
            }
        },
        "summary": {
            "effects": [
                {
                    "address": {
                        "opaque": {
                            "address": {
                                "inner": "ZhOHChoX1q2NcXNxAi5pOhuTWMmqyr5+xZN6cVkaqvnF/zb8TdOT66msXfPjpB2DzoTBuOkHuXZ0vNoy7RXEKK0XgkVHlnY/9OlZYXsVz3Q=",
                                "altBech32m": ""
                            }
                        }
                    },
                    "balance": {
                        "values": [
                            {
                                "value": {
                                    "amount": {
                                        "lo": "50000000",
                                        "hi": "0"
                                    },
                                    "assetId": {
                                        "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    }
                                },
                                "negated": true
                            }
                        ]
                    }
                },
                {
                    "address": {
                        "opaque": {
                            "address": {
                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                "altBech32m": ""
                            }
                        }
                    },
                    "balance": {
                        "values": [
                            {
                                "value": {
                                    "amount": {
                                        "lo": "50000934",
                                        "hi": "0"
                                    },
                                    "assetId": {
                                        "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    }
                                },
                                "negated": false
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        "height": "3461549",
        "id": {
            "inner": "xi5jqo3nb/8AUlf9jtit0x6cT1qxNK6tAOhfHPc/wag="
        },
        "transaction": {
            "body": {
                "actions": [
                    {
                        "swapClaim": {
                            "proof": {
                                "inner": "UyNe8w1kN2anTxmFRqhcZZcrurFrWd58xOqj7XvOgyRInhLdsYxMV6XZNob54h0Bs5mUTFvv8U0e1DC+dmQ0Lyggfyo/3WodPTQpSSH5gHeKsLMc9L4PVp7ffljzhvcAihfK5naQcSBwTTjUpktufu9va4WcYmJJfy+O77Ft2t/exw2DQJW13VPkQofF/46AxRf3qZl4JSRuN9dmnmhulujjJHGp5uvA1cMeSuO7cSVxUmMic2Ac3XyPUaA20DyB"
                            },
                            "body": {
                                "nullifier": {
                                    "inner": "Ny/JHGAj4kSkrBDtuzPqqc4iX8qqOVEyQSxGWKDGlwc="
                                },
                                "fee": {
                                    "amount": {
                                        "lo": "39",
                                        "hi": "0"
                                    }
                                },
                                "output1Commitment": {
                                    "inner": "L5blbYj1avRTd60xaPD6x/k/nTNMRpEtRlimPIZN4RA="
                                },
                                "output2Commitment": {
                                    "inner": "FyjYQvAEPGm/HiQla8LuFcHrp+0UHSQL7cO/mSb/sgM="
                                },
                                "outputData": {
                                    "delta1": {
                                        "lo": "0",
                                        "hi": "0"
                                    },
                                    "delta2": {
                                        "lo": "100000",
                                        "hi": "0"
                                    },
                                    "lambda1": {
                                        "lo": "1534505",
                                        "hi": "0"
                                    },
                                    "lambda2": {
                                        "lo": "0",
                                        "hi": "0"
                                    },
                                    "unfilled1": {
                                        "lo": "0",
                                        "hi": "0"
                                    },
                                    "unfilled2": {
                                        "lo": "0",
                                        "hi": "0"
                                    },
                                    "height": "3461546",
                                    "tradingPair": {
                                        "asset1": {
                                            "inner": "KSOgqHs6JCHxZcyFPb9zqb2vtdoNlIVktgWcsCF8RAc=",
                                            "altBech32m": "",
                                            "altBaseDenom": ""
                                        },
                                        "asset2": {
                                            "inner": "B+9mATKkwyNfqyctQ9m5dSqDN7LRCFl6v/r/XyRtDw8=",
                                            "altBech32m": "",
                                            "altBaseDenom": ""
                                        }
                                    },
                                    "epochStartingHeight": "0",
                                    "sctPositionPrefix": "576203522048"
                                }
                            },
                            "epochDuration": "34560"
                        }
                    }
                ],
                "transactionParameters": {
                    "expiryHeight": "0",
                    "chainId": "penumbra-1",
                    "fee": {
                        "amount": {
                            "lo": "39",
                            "hi": "0"
                        }
                    }
                }
            },
            "bindingSig": {
                "inner": "mEHDyEJ4JEYKrn0d+Adf7AF6f/QHM6R3hSBjNwo3eA2oVW7aB0aM1aYPK55zzdxnoy9yxnaVvBFgv7NRpf30AA=="
            },
            "anchor": {
                "inner": "POsy3xTlh7sipP6+X7ncBmleTkfgmZcWiEE4Ek06DxI="
            }
        },
        "perspective": {
            "payloadKeys": [],
            "spendNullifiers": [],
            "adviceNotes": [
                {
                    "value": {
                        "amount": {
                            "lo": "0",
                            "hi": "0"
                        },
                        "assetId": {
                            "inner": "B+9mATKkwyNfqyctQ9m5dSqDN7LRCFl6v/r/XyRtDw8=",
                            "altBech32m": "",
                            "altBaseDenom": ""
                        }
                    },
                    "rseed": "6XY1oYCJqn4NetSjZ3q2aJdgzDNjQWGL4RvNgmIDmgg=",
                    "address": {
                        "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                        "altBech32m": ""
                    }
                },
                {
                    "value": {
                        "amount": {
                            "lo": "1534505",
                            "hi": "0"
                        },
                        "assetId": {
                            "inner": "KSOgqHs6JCHxZcyFPb9zqb2vtdoNlIVktgWcsCF8RAc=",
                            "altBech32m": "",
                            "altBaseDenom": ""
                        }
                    },
                    "rseed": "I5vo2swIQvHEVY7QSuTnmBWEXNmI6mguDykMc0Vw/QU=",
                    "address": {
                        "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                        "altBech32m": ""
                    }
                }
            ],
            "addressViews": [
                {
                    "decoded": {
                        "address": {
                            "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                            "altBech32m": ""
                        },
                        "index": {
                            "account": 0,
                            "randomizer": ""
                        },
                        "walletId": {
                            "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                        }
                    }
                }
            ],
            "denoms": [
                {
                    "description": "The native token of Osmosis",
                    "denomUnits": [
                        {
                            "denom": "transfer/channel-4/uosmo",
                            "exponent": 0,
                            "aliases": []
                        },
                        {
                            "denom": "transfer/channel-4/osmo",
                            "exponent": 6,
                            "aliases": []
                        }
                    ],
                    "base": "transfer/channel-4/uosmo",
                    "display": "transfer/channel-4/osmo",
                    "name": "Osmosis",
                    "symbol": "OSMO",
                    "penumbraAssetId": {
                        "inner": "KSOgqHs6JCHxZcyFPb9zqb2vtdoNlIVktgWcsCF8RAc=",
                        "altBech32m": "",
                        "altBaseDenom": ""
                    },
                    "images": [
                        {
                            "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
                            "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg",
                            "theme": {
                                "primaryColorHex": "#760dbb",
                                "circle": false,
                                "darkMode": false
                            }
                        }
                    ],
                    "priorityScore": "800000000099",
                    "badges": [],
                    "coingeckoId": "osmosis"
                },
                {
                    "description": "ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.",
                    "denomUnits": [
                        {
                            "denom": "transfer/channel-0/uatom",
                            "exponent": 0,
                            "aliases": []
                        },
                        {
                            "denom": "transfer/channel-0/atom",
                            "exponent": 6,
                            "aliases": []
                        }
                    ],
                    "base": "transfer/channel-0/uatom",
                    "display": "transfer/channel-0/atom",
                    "name": "Cosmos Hub Atom",
                    "symbol": "ATOM",
                    "penumbraAssetId": {
                        "inner": "B+9mATKkwyNfqyctQ9m5dSqDN7LRCFl6v/r/XyRtDw8=",
                        "altBech32m": "",
                        "altBaseDenom": ""
                    },
                    "images": [
                        {
                            "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
                            "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg",
                            "theme": {
                                "primaryColorHex": "#272d45",
                                "circle": false,
                                "darkMode": false
                            }
                        }
                    ],
                    "priorityScore": "800000000098",
                    "badges": [],
                    "coingeckoId": "cosmos"
                }
            ],
            "transactionId": {
                "inner": "xi5jqo3nb/8AUlf9jtit0x6cT1qxNK6tAOhfHPc/wag="
            },
            "prices": [],
            "extendedMetadata": [],
            "creationTransactionIdsByNullifier": [
                {
                    "nullifier": {
                        "inner": "Ny/JHGAj4kSkrBDtuzPqqc4iX8qqOVEyQSxGWKDGlwc="
                    },
                    "transactionId": {
                        "inner": "vASEfBhFg+7RMGeRHhXpOfYgw3pHxqtHO6RDZd5QvsY="
                    }
                }
            ],
            "nullificationTransactionIdsByCommitment": [],
            "batchSwapOutputData": []
        },
        "view": {
            "bodyView": {
                "actionViews": [
                    {
                        "swapClaim": {
                            "visible": {
                                "swapClaim": {
                                    "proof": {
                                        "inner": "UyNe8w1kN2anTxmFRqhcZZcrurFrWd58xOqj7XvOgyRInhLdsYxMV6XZNob54h0Bs5mUTFvv8U0e1DC+dmQ0Lyggfyo/3WodPTQpSSH5gHeKsLMc9L4PVp7ffljzhvcAihfK5naQcSBwTTjUpktufu9va4WcYmJJfy+O77Ft2t/exw2DQJW13VPkQofF/46AxRf3qZl4JSRuN9dmnmhulujjJHGp5uvA1cMeSuO7cSVxUmMic2Ac3XyPUaA20DyB"
                                    },
                                    "body": {
                                        "nullifier": {
                                            "inner": "Ny/JHGAj4kSkrBDtuzPqqc4iX8qqOVEyQSxGWKDGlwc="
                                        },
                                        "fee": {
                                            "amount": {
                                                "lo": "39",
                                                "hi": "0"
                                            }
                                        },
                                        "output1Commitment": {
                                            "inner": "L5blbYj1avRTd60xaPD6x/k/nTNMRpEtRlimPIZN4RA="
                                        },
                                        "output2Commitment": {
                                            "inner": "FyjYQvAEPGm/HiQla8LuFcHrp+0UHSQL7cO/mSb/sgM="
                                        },
                                        "outputData": {
                                            "delta1": {
                                                "lo": "0",
                                                "hi": "0"
                                            },
                                            "delta2": {
                                                "lo": "100000",
                                                "hi": "0"
                                            },
                                            "lambda1": {
                                                "lo": "1534505",
                                                "hi": "0"
                                            },
                                            "lambda2": {
                                                "lo": "0",
                                                "hi": "0"
                                            },
                                            "unfilled1": {
                                                "lo": "0",
                                                "hi": "0"
                                            },
                                            "unfilled2": {
                                                "lo": "0",
                                                "hi": "0"
                                            },
                                            "height": "3461546",
                                            "tradingPair": {
                                                "asset1": {
                                                    "inner": "KSOgqHs6JCHxZcyFPb9zqb2vtdoNlIVktgWcsCF8RAc=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "asset2": {
                                                    "inner": "B+9mATKkwyNfqyctQ9m5dSqDN7LRCFl6v/r/XyRtDw8=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                }
                                            },
                                            "epochStartingHeight": "0",
                                            "sctPositionPrefix": "576203522048"
                                        }
                                    },
                                    "epochDuration": "34560"
                                },
                                "output1": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "1534505",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "The native token of Osmosis",
                                                "denomUnits": [
                                                    {
                                                        "denom": "transfer/channel-4/uosmo",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "transfer/channel-4/osmo",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "transfer/channel-4/uosmo",
                                                "display": "transfer/channel-4/osmo",
                                                "name": "Osmosis",
                                                "symbol": "OSMO",
                                                "penumbraAssetId": {
                                                    "inner": "KSOgqHs6JCHxZcyFPb9zqb2vtdoNlIVktgWcsCF8RAc=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
                                                        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#760dbb",
                                                            "circle": false,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "800000000099",
                                                "badges": [],
                                                "coingeckoId": "osmosis"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "I5vo2swIQvHEVY7QSuTnmBWEXNmI6mguDykMc0Vw/QU=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                },
                                "output2": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "0",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.",
                                                "denomUnits": [
                                                    {
                                                        "denom": "transfer/channel-0/uatom",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "transfer/channel-0/atom",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "transfer/channel-0/uatom",
                                                "display": "transfer/channel-0/atom",
                                                "name": "Cosmos Hub Atom",
                                                "symbol": "ATOM",
                                                "penumbraAssetId": {
                                                    "inner": "B+9mATKkwyNfqyctQ9m5dSqDN7LRCFl6v/r/XyRtDw8=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
                                                        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#272d45",
                                                            "circle": false,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "800000000098",
                                                "badges": [],
                                                "coingeckoId": "cosmos"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "6XY1oYCJqn4NetSjZ3q2aJdgzDNjQWGL4RvNgmIDmgg=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                },
                                "swapTx": {
                                    "inner": "vASEfBhFg+7RMGeRHhXpOfYgw3pHxqtHO6RDZd5QvsY="
                                }
                            }
                        }
                    }
                ],
                "transactionParameters": {
                    "expiryHeight": "0",
                    "chainId": "penumbra-1",
                    "fee": {
                        "amount": {
                            "lo": "39",
                            "hi": "0"
                        }
                    }
                }
            },
            "bindingSig": {
                "inner": "mEHDyEJ4JEYKrn0d+Adf7AF6f/QHM6R3hSBjNwo3eA2oVW7aB0aM1aYPK55zzdxnoy9yxnaVvBFgv7NRpf30AA=="
            },
            "anchor": {
                "inner": "POsy3xTlh7sipP6+X7ncBmleTkfgmZcWiEE4Ek06DxI="
            }
        },
        "summary": {
            "effects": [
                {
                    "address": {
                        "opaque": {
                            "address": {
                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                "altBech32m": ""
                            }
                        }
                    },
                    "balance": {
                        "values": [
                            {
                                "value": {
                                    "amount": {
                                        "lo": "39",
                                        "hi": "0"
                                    },
                                    "assetId": {
                                        "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    }
                                },
                                "negated": false
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        "height": "3461546",
        "id": {
            "inner": "vASEfBhFg+7RMGeRHhXpOfYgw3pHxqtHO6RDZd5QvsY="
        },
        "transaction": {
            "body": {
                "actions": [
                    {
                        "spend": {
                            "body": {
                                "balanceCommitment": {
                                    "inner": "YOiuzWIKWUYAai98GAkQ3ylWR4t/JoBMs5X//a6/NhA="
                                },
                                "rk": {
                                    "inner": "wBipc5/j5GN2b5XnTGcCXKPqQ2wgL7yLS58q7iQ82Qs="
                                },
                                "nullifier": {
                                    "inner": "UquvK2v1IYOFSwfO310oIvp6iXa3E9+39FYzx9FrLxA="
                                },
                                "encryptedBackref": "PfQRta+LtqXMT/G5ri+3BEcGVUwc42Wa6PVI0+GtGJK/EAuGeGxuk+JyZkiGIaCJ"
                            },
                            "authSig": {
                                "inner": "uiJ6LhjV7R0UN5YUnJ1wqwLLI08mjWo6Uhg7hAwh3Q/YCM+Oud4Z8mk80MfOLjH0Mc/BNMjw7nesfXbBPbw5Aw=="
                            },
                            "proof": {
                                "inner": "XBB7y9+m2CYYmcakmx0cSmQrv7T+YHhh1wUL7onttCk+2eKZ/9rY8yeEG9pHRFcBQKv5/dns9oJqR4Zx5ureyoFMPX+Q+Iv6oDDbo09kteQTF3Jh2hzoNwkdvxiT+5gBLYvuUkunYlT1e5m6rGFPCALnN4STtn63cDyzh3vHiZpy3P/jI1ax0CXzjltpu2QAiXEr48ON8Z3yznUqZCrBHIt4u6uBaoNcaU27h6ozUftUb6SKk9gCt46pcItAUAYB"
                            }
                        }
                    },
                    {
                        "spend": {
                            "body": {
                                "balanceCommitment": {
                                    "inner": "3p12V40Y7GHLOef1SZSRCSkDK0q9EzraQOMWPV0IoQE="
                                },
                                "rk": {
                                    "inner": "Ku6olJ+6a5A74IBVkJlkLm1SXRdPbsE6X77EhOrM4gA="
                                },
                                "nullifier": {
                                    "inner": "LTRyiXtdJINCxX+m5+z2W+qec117rU+GO4Dbo0F+axE="
                                },
                                "encryptedBackref": "8BOhha8oNhymQ2rPTAIC0frPVP4J8p3wYdeclWRjisfgoKmSu48ImZEAEpVGuy/Z"
                            },
                            "authSig": {
                                "inner": "MNk86V+SumXcFx4MgG6vufCxyYaW2Leje8heQqT9mAvhvvf1ReeNYe9q7MF5PRERc7kf7bjRgsNdfSCanbvtAQ=="
                            },
                            "proof": {
                                "inner": "huLuX0SzIO1QaRnGabhE7qBGsRS25n6UNgF7hyzD9DUQwNgELKET0Zu6AEU6p80A6Gqo3KwZ5hAOONxnrDh7JhWBzYfTYgHzetgJjIo5MiIe8lBfX3wfkoV/WcZdqHoBP6O0LATQ8tlo31+elSyvy+4fWY7KiFmDdlfYenhuNA3ml9KAQLuuyKFFXJOXJR+AtHWOnI45a5ukqqPWK0J53E505emFs7HKi381P+L8jU0mWFjxxo4EDOlbTcZKeYQB"
                            }
                        }
                    },
                    {
                        "output": {
                            "body": {
                                "notePayload": {
                                    "noteCommitment": {
                                        "inner": "cPod5lSaBPbmC/RPGGUghHyC5YRr7/ANl2j+VcRl7QI="
                                    },
                                    "ephemeralKey": "9O7hULOdziPv38A16ZjKpFpdHrfFsPexBynMUDoH7w8=",
                                    "encryptedNote": {
                                        "inner": "qRWOgPg9ytQ4L/qKwsiPF2f1OiGL8b9oaC5DwtjlPT2JGMhMwBff/slHacCIuUx45PHtWNtaQTQZKs8/w02tRtd3zSyJwhLP1CiKmOP6TH/DQmfBB+Az5WfMGeaawi/gFdmOp4ZXbHXSW5MY48O3KstqaHqN9RhNGxw8861VhoUvV+XyMN0ZM4rZfm+RfqvVwkg6xi9IJBZAEtnOgYCGywnZnw14oxAcQhPGtVX8fFM="
                                    }
                                },
                                "balanceCommitment": {
                                    "inner": "Qp4t3IY3G96ZNMmGhsoV4TG5ozcc2Zu6AK2NAAoUHwM="
                                },
                                "wrappedMemoKey": "FZyDVmWtvCIFYTDyjyW28W/wGETbymwjma7tzTZjlUVjdofaNAbiSTo33jlliT7y",
                                "ovkWrappedKey": "4K6zIwFUg01nr8QN598mtoE7stj+NelHEr5MYB7arRsRTQK/f+P3nO/hjQxNuWDQ"
                            },
                            "proof": {
                                "inner": "fwkTWdIEKQUxdSUjzyAPZsOMKxncfa/tM2LgunOr/qjW4+dm7OY70mnU/hPvNbyAvOAvQL9V8K3QGjzoijBFn0trb+zmMkOcGuVEd+BTEdXDCkH+aDq16UM5n+Ix5HYBzOXD6y0nP7WcKDr3CoV7q53j6Lk1ttr3vf3mSU6QzZdLFOcOWYUvQqLmGHmaeuqAYpurKgm0PdfxIWpLF6OHricvou+BMSE+ZvLJZCt1rvwnzUtQKFNj5ymrJW4UxJ2B"
                            }
                        }
                    },
                    {
                        "swap": {
                            "proof": {
                                "inner": "Ou/2RlJxkCmblD/h/YbrRCSXgUp/L1YJW2+SJfZGX6sc+/I2QDVNcTQFdXEgKZQB2lTXaxDCzJibjNzyT+6aOLBwpm0iZaj5NTha+HOEmBZOrPlEhskOnDISJWYqVwgBH4YRQBodmYcKniFv2b2w0xRcI2qzlFeAxVslEvb0VcCcq0oBBTYmDK3bLycjAiABxx2DHPH1bqC225Pb/tTGRtuKO+ihlUoHWCYTmtEg2aT/TYF4keNzvbwLpYkrWEcA"
                            },
                            "body": {
                                "tradingPair": {
                                    "asset1": {
                                        "inner": "KSOgqHs6JCHxZcyFPb9zqb2vtdoNlIVktgWcsCF8RAc=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    },
                                    "asset2": {
                                        "inner": "B+9mATKkwyNfqyctQ9m5dSqDN7LRCFl6v/r/XyRtDw8=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    }
                                },
                                "delta1I": {
                                    "lo": "0",
                                    "hi": "0"
                                },
                                "delta2I": {
                                    "lo": "100000",
                                    "hi": "0"
                                },
                                "feeCommitment": {
                                    "inner": "kMbcK7WZmWmZKUU3hbry/kMS2FU3N96LqUXosQbAoBA="
                                },
                                "payload": {
                                    "commitment": {
                                        "inner": "2A42a5MTBZ/lk6IokLPTrLeO+B6HrnTocwMA3MqoeQE="
                                    },
                                    "encryptedSwap": "b2/ecgqu6DgFPG42aIYa5eOqRKUuYs3O1A73A8QDeSWH1diHoIMmFGGJWUAHRq2ycb9DOanh4G9UY5ad/fFUfbI/dIj5kKkEmGb2fpSlsJ2hKZ9I+pGfEEFbwcN9FhA2beWkyWejiAcJDtQZTTO1BS3rzRyvSdw8+HO8r1daw1m5Edo82dq0EnmA4xhis8J0i5TTB501J1Vec5VxIGBUrI7Sjf+GWpzrjunrvlVnYAyZVoVT4n78JidklNEmJaXBMjM9+75mg7wJmjcj920CzAMaCSj0gKHFlZYMbWpat11K0/6JB7GXFswboYvwXw2aMNmp8ytRvBgFqRWJW0n9pSWe/grrrf8+ybCDor5ONA4="
                                }
                            }
                        }
                    }
                ],
                "transactionParameters": {
                    "expiryHeight": "0",
                    "chainId": "penumbra-1",
                    "fee": {
                        "amount": {
                            "lo": "1298",
                            "hi": "0"
                        }
                    }
                },
                "detectionData": {
                    "fmdClues": [
                        {
                            "inner": "fJRK/jjEwyVMt2KX8CHMEBGvIkQ4QpxKs5jhT8loeQh6GguJ2csavWs4fFDEXyb2HqhRugIgwb8mQuq6IbHdAQAAAAA="
                        }
                    ]
                },
                "memo": {
                    "inner": "fMieBCxcjS7+VExpQ2oFodva7pcJpRLnXQ+h+po6Tej+2kuLX8FYEV5PXISBlqYtgzDdJOUPB1SSl/QiCuxl0Yb5Xrwrc1gVZn/wr2q5HfxBzNouLI+48RVZwpvAbdHwTijTDFnYRYcwgHPjZjlTz+cIrStk9GXgm2ylP7yEeQQNm7InY7UW3kkftCfcFABF0px619Zb3MZkCJPY+GDpb3AfCYVComIpStlDkCKmL/2evMSNpZvYlA/Av0fpZYBeEImUrocqhD1OwF405SmOG/A2ZaetF6yfZ7W+csNRo68K33r0esSKxkyDnIHdLLrHy1ttVGEP3B8+l86sWX9RLzhtNMArFtYJdJqfKk1c3CNzSaZCr/daCVewsVNqrjuFN1fKYQf/2aG/AigXgR0xO7d6K7jbh98UlrsJAxKNKInJ/g1mjdqeGafEZgayLPEjSYaNo1HaU0YOKp4iFhk8DileHRsdPpmzQ66Gg2mOTTTEX5o9X8lFxCXSPI/fHApVM8s9IWHu1y/OiDRuSFN/AunUeFbf3GzsvAg8M9BQCBptnA59MVj3DTxPSBbqxuzR5bguGTbVPDH7nEFPOiQbPeDh7cFa5GFWgTLEPvPl1t456/aDaDXracZ48EF/GF4/fDvl4tzkTMtSXzTVA4t3VD/z0LQeKv9SBaoiIN5oaIRhy1xfciXyQRx7FylR8fgN"
                }
            },
            "bindingSig": {
                "inner": "qjT/gtjD9dwPAusVt6rQNV0pg8Lsd7RhgV0LC+aJGwe9YgFtI8XuZ5moZAI2da0X+xbfA8vLt6KtZ7IRPqoUAQ=="
            },
            "anchor": {
                "inner": "KgicS0hExUdxs80vB1VtkoojD5NrcSSFx4iyFRfMego="
            }
        },
        "perspective": {
            "payloadKeys": [
                {
                    "payloadKey": {
                        "inner": "sahYpDMFtJhZ4VngF2ng5RMBlfmclLnO3PrZ0GDDCw4="
                    },
                    "commitment": {
                        "inner": "2A42a5MTBZ/lk6IokLPTrLeO+B6HrnTocwMA3MqoeQE="
                    }
                },
                {
                    "payloadKey": {
                        "inner": "sdCnuyQi8L2nOXQ5HZTSKcnroK88/z+iJO8BRXcPMXE="
                    },
                    "commitment": {
                        "inner": "cPod5lSaBPbmC/RPGGUghHyC5YRr7/ANl2j+VcRl7QI="
                    }
                }
            ],
            "spendNullifiers": [
                {
                    "nullifier": {
                        "inner": "UquvK2v1IYOFSwfO310oIvp6iXa3E9+39FYzx9FrLxA="
                    },
                    "note": {
                        "value": {
                            "amount": {
                                "lo": "100000",
                                "hi": "0"
                            },
                            "assetId": {
                                "inner": "B+9mATKkwyNfqyctQ9m5dSqDN7LRCFl6v/r/XyRtDw8=",
                                "altBech32m": "",
                                "altBaseDenom": ""
                            }
                        },
                        "rseed": "2H6Tj3z9Lm8uGPEtfOUe4ekOGiarAFzPSro+wANvVZc=",
                        "address": {
                            "inner": "Nfsqr+QvH5bm7m9pGgJvMWxMDWtmQF0UAA9eSGmDTWB0DGwflZdhj+UwjSvHtFu/AYAUsVFQZbBO5PJvFsjV7pJ5D5q6JnmbklMLvwswAS8=",
                            "altBech32m": ""
                        }
                    }
                },
                {
                    "nullifier": {
                        "inner": "LTRyiXtdJINCxX+m5+z2W+qec117rU+GO4Dbo0F+axE="
                    },
                    "note": {
                        "value": {
                            "amount": {
                                "lo": "2124999036",
                                "hi": "0"
                            },
                            "assetId": {
                                "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                "altBech32m": "",
                                "altBaseDenom": ""
                            }
                        },
                        "rseed": "HsDiAKpRHBHZyPRiwnHWpUgrO6l3op2otekTWmOIwUs=",
                        "address": {
                            "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                            "altBech32m": ""
                        }
                    }
                }
            ],
            "adviceNotes": [],
            "addressViews": [
                {
                    "decoded": {
                        "address": {
                            "inner": "Nfsqr+QvH5bm7m9pGgJvMWxMDWtmQF0UAA9eSGmDTWB0DGwflZdhj+UwjSvHtFu/AYAUsVFQZbBO5PJvFsjV7pJ5D5q6JnmbklMLvwswAS8=",
                            "altBech32m": ""
                        },
                        "index": {
                            "account": 0,
                            "randomizer": "2Fu6L2N7kxGC1G1s"
                        },
                        "walletId": {
                            "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                        }
                    }
                },
                {
                    "decoded": {
                        "address": {
                            "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                            "altBech32m": ""
                        },
                        "index": {
                            "account": 0,
                            "randomizer": ""
                        },
                        "walletId": {
                            "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                        }
                    }
                }
            ],
            "denoms": [
                {
                    "description": "The native token of Osmosis",
                    "denomUnits": [
                        {
                            "denom": "transfer/channel-4/uosmo",
                            "exponent": 0,
                            "aliases": []
                        },
                        {
                            "denom": "transfer/channel-4/osmo",
                            "exponent": 6,
                            "aliases": []
                        }
                    ],
                    "base": "transfer/channel-4/uosmo",
                    "display": "transfer/channel-4/osmo",
                    "name": "Osmosis",
                    "symbol": "OSMO",
                    "penumbraAssetId": {
                        "inner": "KSOgqHs6JCHxZcyFPb9zqb2vtdoNlIVktgWcsCF8RAc=",
                        "altBech32m": "",
                        "altBaseDenom": ""
                    },
                    "images": [
                        {
                            "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
                            "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg",
                            "theme": {
                                "primaryColorHex": "#760dbb",
                                "circle": false,
                                "darkMode": false
                            }
                        }
                    ],
                    "priorityScore": "800000000099",
                    "badges": [],
                    "coingeckoId": "osmosis"
                },
                {
                    "description": "ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.",
                    "denomUnits": [
                        {
                            "denom": "transfer/channel-0/uatom",
                            "exponent": 0,
                            "aliases": []
                        },
                        {
                            "denom": "transfer/channel-0/atom",
                            "exponent": 6,
                            "aliases": []
                        }
                    ],
                    "base": "transfer/channel-0/uatom",
                    "display": "transfer/channel-0/atom",
                    "name": "Cosmos Hub Atom",
                    "symbol": "ATOM",
                    "penumbraAssetId": {
                        "inner": "B+9mATKkwyNfqyctQ9m5dSqDN7LRCFl6v/r/XyRtDw8=",
                        "altBech32m": "",
                        "altBaseDenom": ""
                    },
                    "images": [
                        {
                            "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
                            "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg",
                            "theme": {
                                "primaryColorHex": "#272d45",
                                "circle": false,
                                "darkMode": false
                            }
                        }
                    ],
                    "priorityScore": "800000000098",
                    "badges": [],
                    "coingeckoId": "cosmos"
                },
                {
                    "description": "The native token of Penumbra",
                    "denomUnits": [
                        {
                            "denom": "penumbra",
                            "exponent": 6,
                            "aliases": []
                        },
                        {
                            "denom": "mpenumbra",
                            "exponent": 3,
                            "aliases": []
                        },
                        {
                            "denom": "upenumbra",
                            "exponent": 0,
                            "aliases": []
                        }
                    ],
                    "base": "upenumbra",
                    "display": "penumbra",
                    "name": "Penumbra",
                    "symbol": "UM",
                    "penumbraAssetId": {
                        "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                        "altBech32m": "",
                        "altBaseDenom": ""
                    },
                    "images": [
                        {
                            "png": "",
                            "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                            "theme": {
                                "primaryColorHex": "#c9a975",
                                "circle": false,
                                "darkMode": false
                            }
                        }
                    ],
                    "priorityScore": "999999999999",
                    "badges": [],
                    "coingeckoId": "penumbra"
                }
            ],
            "transactionId": {
                "inner": "vASEfBhFg+7RMGeRHhXpOfYgw3pHxqtHO6RDZd5QvsY="
            },
            "prices": [],
            "extendedMetadata": [],
            "creationTransactionIdsByNullifier": [],
            "nullificationTransactionIdsByCommitment": [
                {
                    "commitment": {
                        "inner": "2A42a5MTBZ/lk6IokLPTrLeO+B6HrnTocwMA3MqoeQE="
                    },
                    "transactionId": {
                        "inner": "xi5jqo3nb/8AUlf9jtit0x6cT1qxNK6tAOhfHPc/wag="
                    }
                }
            ],
            "batchSwapOutputData": [
                {
                    "delta1": {
                        "lo": "0",
                        "hi": "0"
                    },
                    "delta2": {
                        "lo": "100000",
                        "hi": "0"
                    },
                    "lambda1": {
                        "lo": "1534505",
                        "hi": "0"
                    },
                    "lambda2": {
                        "lo": "0",
                        "hi": "0"
                    },
                    "unfilled1": {
                        "lo": "0",
                        "hi": "0"
                    },
                    "unfilled2": {
                        "lo": "0",
                        "hi": "0"
                    },
                    "height": "3461546",
                    "tradingPair": {
                        "asset1": {
                            "inner": "KSOgqHs6JCHxZcyFPb9zqb2vtdoNlIVktgWcsCF8RAc=",
                            "altBech32m": "",
                            "altBaseDenom": ""
                        },
                        "asset2": {
                            "inner": "B+9mATKkwyNfqyctQ9m5dSqDN7LRCFl6v/r/XyRtDw8=",
                            "altBech32m": "",
                            "altBaseDenom": ""
                        }
                    },
                    "epochStartingHeight": "0",
                    "sctPositionPrefix": "576203522048"
                }
            ]
        },
        "view": {
            "bodyView": {
                "actionViews": [
                    {
                        "spend": {
                            "visible": {
                                "spend": {
                                    "body": {
                                        "balanceCommitment": {
                                            "inner": "YOiuzWIKWUYAai98GAkQ3ylWR4t/JoBMs5X//a6/NhA="
                                        },
                                        "rk": {
                                            "inner": "wBipc5/j5GN2b5XnTGcCXKPqQ2wgL7yLS58q7iQ82Qs="
                                        },
                                        "nullifier": {
                                            "inner": "UquvK2v1IYOFSwfO310oIvp6iXa3E9+39FYzx9FrLxA="
                                        },
                                        "encryptedBackref": "PfQRta+LtqXMT/G5ri+3BEcGVUwc42Wa6PVI0+GtGJK/EAuGeGxuk+JyZkiGIaCJ"
                                    },
                                    "authSig": {
                                        "inner": "uiJ6LhjV7R0UN5YUnJ1wqwLLI08mjWo6Uhg7hAwh3Q/YCM+Oud4Z8mk80MfOLjH0Mc/BNMjw7nesfXbBPbw5Aw=="
                                    },
                                    "proof": {
                                        "inner": "XBB7y9+m2CYYmcakmx0cSmQrv7T+YHhh1wUL7onttCk+2eKZ/9rY8yeEG9pHRFcBQKv5/dns9oJqR4Zx5ureyoFMPX+Q+Iv6oDDbo09kteQTF3Jh2hzoNwkdvxiT+5gBLYvuUkunYlT1e5m6rGFPCALnN4STtn63cDyzh3vHiZpy3P/jI1ax0CXzjltpu2QAiXEr48ON8Z3yznUqZCrBHIt4u6uBaoNcaU27h6ozUftUb6SKk9gCt46pcItAUAYB"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "100000",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.",
                                                "denomUnits": [
                                                    {
                                                        "denom": "transfer/channel-0/uatom",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "transfer/channel-0/atom",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "transfer/channel-0/uatom",
                                                "display": "transfer/channel-0/atom",
                                                "name": "Cosmos Hub Atom",
                                                "symbol": "ATOM",
                                                "penumbraAssetId": {
                                                    "inner": "B+9mATKkwyNfqyctQ9m5dSqDN7LRCFl6v/r/XyRtDw8=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
                                                        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#272d45",
                                                            "circle": false,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "800000000098",
                                                "badges": [],
                                                "coingeckoId": "cosmos"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "2H6Tj3z9Lm8uGPEtfOUe4ekOGiarAFzPSro+wANvVZc=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "Nfsqr+QvH5bm7m9pGgJvMWxMDWtmQF0UAA9eSGmDTWB0DGwflZdhj+UwjSvHtFu/AYAUsVFQZbBO5PJvFsjV7pJ5D5q6JnmbklMLvwswAS8=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": "2Fu6L2N7kxGC1G1s"
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    {
                        "spend": {
                            "visible": {
                                "spend": {
                                    "body": {
                                        "balanceCommitment": {
                                            "inner": "3p12V40Y7GHLOef1SZSRCSkDK0q9EzraQOMWPV0IoQE="
                                        },
                                        "rk": {
                                            "inner": "Ku6olJ+6a5A74IBVkJlkLm1SXRdPbsE6X77EhOrM4gA="
                                        },
                                        "nullifier": {
                                            "inner": "LTRyiXtdJINCxX+m5+z2W+qec117rU+GO4Dbo0F+axE="
                                        },
                                        "encryptedBackref": "8BOhha8oNhymQ2rPTAIC0frPVP4J8p3wYdeclWRjisfgoKmSu48ImZEAEpVGuy/Z"
                                    },
                                    "authSig": {
                                        "inner": "MNk86V+SumXcFx4MgG6vufCxyYaW2Leje8heQqT9mAvhvvf1ReeNYe9q7MF5PRERc7kf7bjRgsNdfSCanbvtAQ=="
                                    },
                                    "proof": {
                                        "inner": "huLuX0SzIO1QaRnGabhE7qBGsRS25n6UNgF7hyzD9DUQwNgELKET0Zu6AEU6p80A6Gqo3KwZ5hAOONxnrDh7JhWBzYfTYgHzetgJjIo5MiIe8lBfX3wfkoV/WcZdqHoBP6O0LATQ8tlo31+elSyvy+4fWY7KiFmDdlfYenhuNA3ml9KAQLuuyKFFXJOXJR+AtHWOnI45a5ukqqPWK0J53E505emFs7HKi381P+L8jU0mWFjxxo4EDOlbTcZKeYQB"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "2124999036",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "The native token of Penumbra",
                                                "denomUnits": [
                                                    {
                                                        "denom": "penumbra",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "mpenumbra",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "upenumbra",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "upenumbra",
                                                "display": "penumbra",
                                                "name": "Penumbra",
                                                "symbol": "UM",
                                                "penumbraAssetId": {
                                                    "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "",
                                                        "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#c9a975",
                                                            "circle": false,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "999999999999",
                                                "badges": [],
                                                "coingeckoId": "penumbra"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "HsDiAKpRHBHZyPRiwnHWpUgrO6l3op2otekTWmOIwUs=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    {
                        "output": {
                            "visible": {
                                "output": {
                                    "body": {
                                        "notePayload": {
                                            "noteCommitment": {
                                                "inner": "cPod5lSaBPbmC/RPGGUghHyC5YRr7/ANl2j+VcRl7QI="
                                            },
                                            "ephemeralKey": "9O7hULOdziPv38A16ZjKpFpdHrfFsPexBynMUDoH7w8=",
                                            "encryptedNote": {
                                                "inner": "qRWOgPg9ytQ4L/qKwsiPF2f1OiGL8b9oaC5DwtjlPT2JGMhMwBff/slHacCIuUx45PHtWNtaQTQZKs8/w02tRtd3zSyJwhLP1CiKmOP6TH/DQmfBB+Az5WfMGeaawi/gFdmOp4ZXbHXSW5MY48O3KstqaHqN9RhNGxw8861VhoUvV+XyMN0ZM4rZfm+RfqvVwkg6xi9IJBZAEtnOgYCGywnZnw14oxAcQhPGtVX8fFM="
                                            }
                                        },
                                        "balanceCommitment": {
                                            "inner": "Qp4t3IY3G96ZNMmGhsoV4TG5ozcc2Zu6AK2NAAoUHwM="
                                        },
                                        "wrappedMemoKey": "FZyDVmWtvCIFYTDyjyW28W/wGETbymwjma7tzTZjlUVjdofaNAbiSTo33jlliT7y",
                                        "ovkWrappedKey": "4K6zIwFUg01nr8QN598mtoE7stj+NelHEr5MYB7arRsRTQK/f+P3nO/hjQxNuWDQ"
                                    },
                                    "proof": {
                                        "inner": "fwkTWdIEKQUxdSUjzyAPZsOMKxncfa/tM2LgunOr/qjW4+dm7OY70mnU/hPvNbyAvOAvQL9V8K3QGjzoijBFn0trb+zmMkOcGuVEd+BTEdXDCkH+aDq16UM5n+Ix5HYBzOXD6y0nP7WcKDr3CoV7q53j6Lk1ttr3vf3mSU6QzZdLFOcOWYUvQqLmGHmaeuqAYpurKgm0PdfxIWpLF6OHricvou+BMSE+ZvLJZCt1rvwnzUtQKFNj5ymrJW4UxJ2B"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "2124997699",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "The native token of Penumbra",
                                                "denomUnits": [
                                                    {
                                                        "denom": "penumbra",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "mpenumbra",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "upenumbra",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "upenumbra",
                                                "display": "penumbra",
                                                "name": "Penumbra",
                                                "symbol": "UM",
                                                "penumbraAssetId": {
                                                    "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "",
                                                        "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#c9a975",
                                                            "circle": false,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "999999999999",
                                                "badges": [],
                                                "coingeckoId": "penumbra"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "ZCvLIwjZeq6yskVaRFfc45Pv5I/ZIn+K2JH2uNvQrIo=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                },
                                "payloadKey": {
                                    "inner": "+oKme5PQapvLIgIzII9xhaPiQHFgmCPBHhrw2SgXUTg="
                                }
                            }
                        }
                    },
                    {
                        "swap": {
                            "visible": {
                                "swap": {
                                    "proof": {
                                        "inner": "Ou/2RlJxkCmblD/h/YbrRCSXgUp/L1YJW2+SJfZGX6sc+/I2QDVNcTQFdXEgKZQB2lTXaxDCzJibjNzyT+6aOLBwpm0iZaj5NTha+HOEmBZOrPlEhskOnDISJWYqVwgBH4YRQBodmYcKniFv2b2w0xRcI2qzlFeAxVslEvb0VcCcq0oBBTYmDK3bLycjAiABxx2DHPH1bqC225Pb/tTGRtuKO+ihlUoHWCYTmtEg2aT/TYF4keNzvbwLpYkrWEcA"
                                    },
                                    "body": {
                                        "tradingPair": {
                                            "asset1": {
                                                "inner": "KSOgqHs6JCHxZcyFPb9zqb2vtdoNlIVktgWcsCF8RAc=",
                                                "altBech32m": "",
                                                "altBaseDenom": ""
                                            },
                                            "asset2": {
                                                "inner": "B+9mATKkwyNfqyctQ9m5dSqDN7LRCFl6v/r/XyRtDw8=",
                                                "altBech32m": "",
                                                "altBaseDenom": ""
                                            }
                                        },
                                        "delta1I": {
                                            "lo": "0",
                                            "hi": "0"
                                        },
                                        "delta2I": {
                                            "lo": "100000",
                                            "hi": "0"
                                        },
                                        "feeCommitment": {
                                            "inner": "kMbcK7WZmWmZKUU3hbry/kMS2FU3N96LqUXosQbAoBA="
                                        },
                                        "payload": {
                                            "commitment": {
                                                "inner": "2A42a5MTBZ/lk6IokLPTrLeO+B6HrnTocwMA3MqoeQE="
                                            },
                                            "encryptedSwap": "b2/ecgqu6DgFPG42aIYa5eOqRKUuYs3O1A73A8QDeSWH1diHoIMmFGGJWUAHRq2ycb9DOanh4G9UY5ad/fFUfbI/dIj5kKkEmGb2fpSlsJ2hKZ9I+pGfEEFbwcN9FhA2beWkyWejiAcJDtQZTTO1BS3rzRyvSdw8+HO8r1daw1m5Edo82dq0EnmA4xhis8J0i5TTB501J1Vec5VxIGBUrI7Sjf+GWpzrjunrvlVnYAyZVoVT4n78JidklNEmJaXBMjM9+75mg7wJmjcj920CzAMaCSj0gKHFlZYMbWpat11K0/6JB7GXFswboYvwXw2aMNmp8ytRvBgFqRWJW0n9pSWe/grrrf8+ybCDor5ONA4="
                                        }
                                    }
                                },
                                "swapPlaintext": {
                                    "tradingPair": {
                                        "asset1": {
                                            "inner": "KSOgqHs6JCHxZcyFPb9zqb2vtdoNlIVktgWcsCF8RAc=",
                                            "altBech32m": "",
                                            "altBaseDenom": ""
                                        },
                                        "asset2": {
                                            "inner": "B+9mATKkwyNfqyctQ9m5dSqDN7LRCFl6v/r/XyRtDw8=",
                                            "altBech32m": "",
                                            "altBaseDenom": ""
                                        }
                                    },
                                    "delta1I": {
                                        "lo": "0",
                                        "hi": "0"
                                    },
                                    "delta2I": {
                                        "lo": "100000",
                                        "hi": "0"
                                    },
                                    "claimFee": {
                                        "amount": {
                                            "lo": "39",
                                            "hi": "0"
                                        }
                                    },
                                    "claimAddress": {
                                        "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                        "altBech32m": ""
                                    },
                                    "rseed": "vaOfjmG8SbeBEEyBiuzodS5tOga7VQ9rLAs+7tF5N+U="
                                },
                                "claimTx": {
                                    "inner": "xi5jqo3nb/8AUlf9jtit0x6cT1qxNK6tAOhfHPc/wag="
                                },
                                "batchSwapOutputData": {
                                    "delta1": {
                                        "lo": "0",
                                        "hi": "0"
                                    },
                                    "delta2": {
                                        "lo": "100000",
                                        "hi": "0"
                                    },
                                    "lambda1": {
                                        "lo": "1534505",
                                        "hi": "0"
                                    },
                                    "lambda2": {
                                        "lo": "0",
                                        "hi": "0"
                                    },
                                    "unfilled1": {
                                        "lo": "0",
                                        "hi": "0"
                                    },
                                    "unfilled2": {
                                        "lo": "0",
                                        "hi": "0"
                                    },
                                    "height": "3461546",
                                    "tradingPair": {
                                        "asset1": {
                                            "inner": "KSOgqHs6JCHxZcyFPb9zqb2vtdoNlIVktgWcsCF8RAc=",
                                            "altBech32m": "",
                                            "altBaseDenom": ""
                                        },
                                        "asset2": {
                                            "inner": "B+9mATKkwyNfqyctQ9m5dSqDN7LRCFl6v/r/XyRtDw8=",
                                            "altBech32m": "",
                                            "altBaseDenom": ""
                                        }
                                    },
                                    "epochStartingHeight": "0",
                                    "sctPositionPrefix": "576203522048"
                                },
                                "output1": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "1534505",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "The native token of Osmosis",
                                                "denomUnits": [
                                                    {
                                                        "denom": "transfer/channel-4/uosmo",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "transfer/channel-4/osmo",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "transfer/channel-4/uosmo",
                                                "display": "transfer/channel-4/osmo",
                                                "name": "Osmosis",
                                                "symbol": "OSMO",
                                                "penumbraAssetId": {
                                                    "inner": "KSOgqHs6JCHxZcyFPb9zqb2vtdoNlIVktgWcsCF8RAc=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
                                                        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#760dbb",
                                                            "circle": false,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "800000000099",
                                                "badges": [],
                                                "coingeckoId": "osmosis"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "I5vo2swIQvHEVY7QSuTnmBWEXNmI6mguDykMc0Vw/QU=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                },
                                "output2": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "0",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.",
                                                "denomUnits": [
                                                    {
                                                        "denom": "transfer/channel-0/uatom",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "transfer/channel-0/atom",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "transfer/channel-0/uatom",
                                                "display": "transfer/channel-0/atom",
                                                "name": "Cosmos Hub Atom",
                                                "symbol": "ATOM",
                                                "penumbraAssetId": {
                                                    "inner": "B+9mATKkwyNfqyctQ9m5dSqDN7LRCFl6v/r/XyRtDw8=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
                                                        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#272d45",
                                                            "circle": false,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "800000000098",
                                                "badges": [],
                                                "coingeckoId": "cosmos"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "6XY1oYCJqn4NetSjZ3q2aJdgzDNjQWGL4RvNgmIDmgg=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                },
                                "asset1Metadata": {
                                    "description": "The native token of Osmosis",
                                    "denomUnits": [
                                        {
                                            "denom": "transfer/channel-4/uosmo",
                                            "exponent": 0,
                                            "aliases": []
                                        },
                                        {
                                            "denom": "transfer/channel-4/osmo",
                                            "exponent": 6,
                                            "aliases": []
                                        }
                                    ],
                                    "base": "transfer/channel-4/uosmo",
                                    "display": "transfer/channel-4/osmo",
                                    "name": "Osmosis",
                                    "symbol": "OSMO",
                                    "penumbraAssetId": {
                                        "inner": "KSOgqHs6JCHxZcyFPb9zqb2vtdoNlIVktgWcsCF8RAc=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    },
                                    "images": [
                                        {
                                            "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.png",
                                            "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/osmosis/images/osmo.svg",
                                            "theme": {
                                                "primaryColorHex": "#760dbb",
                                                "circle": false,
                                                "darkMode": false
                                            }
                                        }
                                    ],
                                    "priorityScore": "800000000099",
                                    "badges": [],
                                    "coingeckoId": "osmosis"
                                },
                                "asset2Metadata": {
                                    "description": "ATOM is the native cryptocurrency of the Cosmos network, designed to facilitate interoperability between multiple blockchains through its innovative hub-and-spoke model.",
                                    "denomUnits": [
                                        {
                                            "denom": "transfer/channel-0/uatom",
                                            "exponent": 0,
                                            "aliases": []
                                        },
                                        {
                                            "denom": "transfer/channel-0/atom",
                                            "exponent": 6,
                                            "aliases": []
                                        }
                                    ],
                                    "base": "transfer/channel-0/uatom",
                                    "display": "transfer/channel-0/atom",
                                    "name": "Cosmos Hub Atom",
                                    "symbol": "ATOM",
                                    "penumbraAssetId": {
                                        "inner": "B+9mATKkwyNfqyctQ9m5dSqDN7LRCFl6v/r/XyRtDw8=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    },
                                    "images": [
                                        {
                                            "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.png",
                                            "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/cosmoshub/images/atom.svg",
                                            "theme": {
                                                "primaryColorHex": "#272d45",
                                                "circle": false,
                                                "darkMode": false
                                            }
                                        }
                                    ],
                                    "priorityScore": "800000000098",
                                    "badges": [],
                                    "coingeckoId": "cosmos"
                                }
                            }
                        }
                    }
                ],
                "transactionParameters": {
                    "expiryHeight": "0",
                    "chainId": "penumbra-1",
                    "fee": {
                        "amount": {
                            "lo": "1298",
                            "hi": "0"
                        }
                    }
                },
                "detectionData": {
                    "fmdClues": [
                        {
                            "inner": "fJRK/jjEwyVMt2KX8CHMEBGvIkQ4QpxKs5jhT8loeQh6GguJ2csavWs4fFDEXyb2HqhRugIgwb8mQuq6IbHdAQAAAAA="
                        }
                    ]
                },
                "memoView": {
                    "visible": {
                        "ciphertext": {
                            "inner": "fMieBCxcjS7+VExpQ2oFodva7pcJpRLnXQ+h+po6Tej+2kuLX8FYEV5PXISBlqYtgzDdJOUPB1SSl/QiCuxl0Yb5Xrwrc1gVZn/wr2q5HfxBzNouLI+48RVZwpvAbdHwTijTDFnYRYcwgHPjZjlTz+cIrStk9GXgm2ylP7yEeQQNm7InY7UW3kkftCfcFABF0px619Zb3MZkCJPY+GDpb3AfCYVComIpStlDkCKmL/2evMSNpZvYlA/Av0fpZYBeEImUrocqhD1OwF405SmOG/A2ZaetF6yfZ7W+csNRo68K33r0esSKxkyDnIHdLLrHy1ttVGEP3B8+l86sWX9RLzhtNMArFtYJdJqfKk1c3CNzSaZCr/daCVewsVNqrjuFN1fKYQf/2aG/AigXgR0xO7d6K7jbh98UlrsJAxKNKInJ/g1mjdqeGafEZgayLPEjSYaNo1HaU0YOKp4iFhk8DileHRsdPpmzQ66Gg2mOTTTEX5o9X8lFxCXSPI/fHApVM8s9IWHu1y/OiDRuSFN/AunUeFbf3GzsvAg8M9BQCBptnA59MVj3DTxPSBbqxuzR5bguGTbVPDH7nEFPOiQbPeDh7cFa5GFWgTLEPvPl1t456/aDaDXracZ48EF/GF4/fDvl4tzkTMtSXzTVA4t3VD/z0LQeKv9SBaoiIN5oaIRhy1xfciXyQRx7FylR8fgN"
                        },
                        "plaintext": {
                            "returnAddress": {
                                "decoded": {
                                    "address": {
                                        "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                        "altBech32m": ""
                                    },
                                    "index": {
                                        "account": 0,
                                        "randomizer": ""
                                    },
                                    "walletId": {
                                        "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                    }
                                }
                            },
                            "text": ""
                        }
                    }
                }
            },
            "bindingSig": {
                "inner": "qjT/gtjD9dwPAusVt6rQNV0pg8Lsd7RhgV0LC+aJGwe9YgFtI8XuZ5moZAI2da0X+xbfA8vLt6KtZ7IRPqoUAQ=="
            },
            "anchor": {
                "inner": "KgicS0hExUdxs80vB1VtkoojD5NrcSSFx4iyFRfMego="
            }
        },
        "summary": {
            "effects": [
                {
                    "address": {
                        "opaque": {
                            "address": {
                                "inner": "Nfsqr+QvH5bm7m9pGgJvMWxMDWtmQF0UAA9eSGmDTWB0DGwflZdhj+UwjSvHtFu/AYAUsVFQZbBO5PJvFsjV7pJ5D5q6JnmbklMLvwswAS8=",
                                "altBech32m": ""
                            }
                        }
                    },
                    "balance": {
                        "values": [
                            {
                                "value": {
                                    "amount": {
                                        "lo": "100000",
                                        "hi": "0"
                                    },
                                    "assetId": {
                                        "inner": "B+9mATKkwyNfqyctQ9m5dSqDN7LRCFl6v/r/XyRtDw8=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    }
                                },
                                "negated": false
                            }
                        ]
                    }
                },
                {
                    "address": {
                        "opaque": {
                            "address": {
                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                "altBech32m": ""
                            }
                        }
                    },
                    "balance": {
                        "values": [
                            {
                                "value": {
                                    "amount": {
                                        "lo": "100000",
                                        "hi": "0"
                                    },
                                    "assetId": {
                                        "inner": "B+9mATKkwyNfqyctQ9m5dSqDN7LRCFl6v/r/XyRtDw8=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    }
                                },
                                "negated": true
                            },
                            {
                                "value": {
                                    "amount": {
                                        "lo": "1298",
                                        "hi": "0"
                                    },
                                    "assetId": {
                                        "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    }
                                },
                                "negated": false
                            }
                        ]
                    }
                }
            ]
        }
    },
    {
        "height": "2823823",
        "id": {
            "inner": "xtDRS7O1TribhWUxsRIduBFSHW/YNykxnQrDRNfwj10="
        },
        "transaction": {
            "body": {
                "actions": [
                    {
                        "spend": {
                            "body": {
                                "balanceCommitment": {
                                    "inner": "/hJ+llCgPQVyc2tRZaTAaDskcgJ07DsvIYTahlMqDwQ="
                                },
                                "rk": {
                                    "inner": "+ulod2xqhQNc2CmGOoL0TKji+A8IDOz3oj5ozZgX4hA="
                                },
                                "nullifier": {
                                    "inner": "8yJcwiL3nUf571wIghx4q0xA7Ezf2TwiTQn0xk5zCA4="
                                },
                                "encryptedBackref": "Y5G71ISHbHIVb7otKEUh7Scz2/8gASnAYFWaKuSbL/DgrwTwCdX+U3lbWvTyt2/R"
                            },
                            "authSig": {
                                "inner": "mjoH7Jld1yMyKsmrDVM6sokH1UkJM96yrAte9r3JexI1JbgsT0jBb+tQAginot2Mio9U5YxQwLsdztETUY/eAA=="
                            },
                            "proof": {
                                "inner": "lnX1xH45u3mzPQrtYGKjHDohRBbyVP2QHd25T8Rmg9sKHeJI6n/QVML08SWQSd+ABLWhXBjAH3gZ5a+YODwDuzgjF4QaOLrRBBguwUKThgN8NFQIA3kpIBSh9d2RhU8Aw/T95dB6Gd3gfvI8N542OAVgqG1OYIRV+z/2XlD9GTWjSVj/qras65J7u+NscYwB1JmBjjpXdBhg6oN0D1bn8HjChUERHoBr1oHxWwtIsZ0MTvJW25/MmDZdLvTyafwA"
                            }
                        }
                    },
                    {
                        "output": {
                            "body": {
                                "notePayload": {
                                    "noteCommitment": {
                                        "inner": "W+n+Sp2f5dEvEWYW4UBmaRbY4/xUaKPoI5qvNvYajww="
                                    },
                                    "ephemeralKey": "hDbiLGUn3ynlR4lep3JsYvD/eQj99CP0XZYL2Yqgxgw=",
                                    "encryptedNote": {
                                        "inner": "aPpIZgiRD2uvVwayGBAbtGaQ0ADiv66UqjBZhh8c9WZeeEtcFCUhcl2BZUwrLotOb9/QNBriNlZIMp2rCCJ4Bzn2bQ/BsApR0O4UuxU/phLdenD2qa7I36sOokEl1Ul5pE2CmnZlIzjECoj7Ab9kuJ7qSqFkj/+ggSTUideNEo1F5um1K1JGg/ZSYRSRaNuyAqwNVdUeL+M6gbbHrdL5YL8abtqiAcapV/lMn0FMWfY="
                                    }
                                },
                                "balanceCommitment": {
                                    "inner": "2D+bRoiX/5zMs71y6H4FZlMK90yQ0OxurOybn7TcBAY="
                                },
                                "wrappedMemoKey": "4ACZWalw9Qqc2QkU+mSx3cKwcsxUC47YnHFdp9CDNR+dZ5S7qOlbI8ePQ24uruUE",
                                "ovkWrappedKey": "P4ld6ikuqrECiMPRrbCdQoU1o3RHW1zvQpA6LvPp9Gm1N/cE0OPHYppqMGhbTm6L"
                            },
                            "proof": {
                                "inner": "3HcjLbRi6AAefnzPPV3c0NyRkX35tihiHLi0Wfixl5zOeCofLzRHL2CZPW2BLaaA/OPKvLgRlIsxrMbN1msWRHR4fCR2LCk0YZJH4AANe92tqQzdPx9rFMqLXv4T+dkAhPCbdEnLyzggpUsc4LTYCeS1uM7kIZOu2Th33SViPO+TkjyE84xWrTzWdEItvpyBeFgZqlAh8+VpuaU6fcshMMMLnQplMUp2aJyXUgSMR9GjspBpCQ7KkBal+sYEkeSA"
                            }
                        }
                    }
                ],
                "transactionParameters": {
                    "expiryHeight": "0",
                    "chainId": "penumbra-1",
                    "fee": {
                        "amount": {
                            "lo": "964",
                            "hi": "0"
                        }
                    }
                },
                "detectionData": {
                    "fmdClues": [
                        {
                            "inner": "MF2ErirHSn4b2skA7CffIe4Y0ZvplZoHjOFxB9EB8whBKib27uTX6iTtk78bXyeBd7dwQG/1LOsN3howdY+7AQAAAAA="
                        }
                    ]
                },
                "memo": {
                    "inner": "xJUoZoJ9pScKn7NUeg+kCATntgjLC8OTh5WQG+ADFkCWzsQtZQj7ASyJOatCujbeADdtqtg6AS0A6hkpjNM4vGiMvlewcuZZdLOJ1jCzXbJ5KuwZquYlaVkr+lL/YHupfOVblXWoj+Pgmi9Z22M8pt8MG6Ta9ewXUFbHp62FcRFx7xy4+b6JuqsoHUnG4DBy+RkaAm92XFGm0JLEOthU5KxcV7lAgU544/P5LsECAqj79IgvN2ghVnoGEzg1AFRzEkpI2B30pCYN28ZiBdxYH4w36euG4YHB204xU+6MiInBeEnwai1HcUTBn0lIbYxbk/B93FyiPUHdOewhDs0+zpXGY6WPd2n5vl1pvxPm0w+tAq/9MtjzEWih1iSIKUZcfGFPdQhHdcObvevqbYUeQOQd3axBh3LJ5Lfa1HFpW5zVlPUqx70CmMp3Yb/GbaR1JTrULhYDD6cBNvS/cgZZLcx8nCxvqjMPv6TmzPtUrBo0BJNGtyZgnNnQGaehTtZFrc/AqVOgny+hlbVDJluIDmJRht5502jHIjQ0oISlbUXKAB8l4JjaGB/tU3xrzpZhyiZUDmM7UDDifu1sLvhRkm3FgRbiGQj8xf3GrWTJ4wkPJIKGQgnvEh8boD3zw/Q0BZQvDg63K8Dysb/rDoBBFsrgaBn3yvQKQorsaTqVCycMEUjomaTTVumuCK8t7PQC"
                }
            },
            "bindingSig": {
                "inner": "eFAkom4WU7c+8b37deuB2XrJ2GNhtR37OruaKmr4ggmG7YdtrNTUwvgYpvo5YfrF7b7FG3PqKQ0g3dEysJVpAQ=="
            },
            "anchor": {
                "inner": "uklH3BRoCr/Km2mWF6kB32TMXg/E3LxPPmlOXDh6OA8="
            }
        },
        "perspective": {
            "payloadKeys": [
                {
                    "payloadKey": {
                        "inner": "u5hfrmy/3WPYch6cN8k3SemC19ooVLiAs6b+VzPNM34="
                    },
                    "commitment": {
                        "inner": "W+n+Sp2f5dEvEWYW4UBmaRbY4/xUaKPoI5qvNvYajww="
                    }
                }
            ],
            "spendNullifiers": [],
            "adviceNotes": [],
            "addressViews": [
                {
                    "decoded": {
                        "address": {
                            "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                            "altBech32m": ""
                        },
                        "index": {
                            "account": 0,
                            "randomizer": ""
                        },
                        "walletId": {
                            "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                        }
                    }
                },
                {
                    "decoded": {
                        "address": {
                            "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                            "altBech32m": ""
                        },
                        "index": {
                            "account": 0,
                            "randomizer": ""
                        },
                        "walletId": {
                            "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                        }
                    }
                }
            ],
            "denoms": [
                {
                    "description": "The native token of Penumbra",
                    "denomUnits": [
                        {
                            "denom": "penumbra",
                            "exponent": 6,
                            "aliases": []
                        },
                        {
                            "denom": "mpenumbra",
                            "exponent": 3,
                            "aliases": []
                        },
                        {
                            "denom": "upenumbra",
                            "exponent": 0,
                            "aliases": []
                        }
                    ],
                    "base": "upenumbra",
                    "display": "penumbra",
                    "name": "Penumbra",
                    "symbol": "UM",
                    "penumbraAssetId": {
                        "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                        "altBech32m": "",
                        "altBaseDenom": ""
                    },
                    "images": [
                        {
                            "png": "",
                            "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                            "theme": {
                                "primaryColorHex": "#c9a975",
                                "circle": false,
                                "darkMode": false
                            }
                        }
                    ],
                    "priorityScore": "999999999999",
                    "badges": [],
                    "coingeckoId": "penumbra"
                }
            ],
            "transactionId": {
                "inner": "xtDRS7O1TribhWUxsRIduBFSHW/YNykxnQrDRNfwj10="
            },
            "prices": [],
            "extendedMetadata": [],
            "creationTransactionIdsByNullifier": [],
            "nullificationTransactionIdsByCommitment": [],
            "batchSwapOutputData": []
        },
        "view": {
            "bodyView": {
                "actionViews": [
                    {
                        "spend": {
                            "opaque": {
                                "spend": {
                                    "body": {
                                        "balanceCommitment": {
                                            "inner": "/hJ+llCgPQVyc2tRZaTAaDskcgJ07DsvIYTahlMqDwQ="
                                        },
                                        "rk": {
                                            "inner": "+ulod2xqhQNc2CmGOoL0TKji+A8IDOz3oj5ozZgX4hA="
                                        },
                                        "nullifier": {
                                            "inner": "8yJcwiL3nUf571wIghx4q0xA7Ezf2TwiTQn0xk5zCA4="
                                        },
                                        "encryptedBackref": "Y5G71ISHbHIVb7otKEUh7Scz2/8gASnAYFWaKuSbL/DgrwTwCdX+U3lbWvTyt2/R"
                                    },
                                    "authSig": {
                                        "inner": "mjoH7Jld1yMyKsmrDVM6sokH1UkJM96yrAte9r3JexI1JbgsT0jBb+tQAginot2Mio9U5YxQwLsdztETUY/eAA=="
                                    },
                                    "proof": {
                                        "inner": "lnX1xH45u3mzPQrtYGKjHDohRBbyVP2QHd25T8Rmg9sKHeJI6n/QVML08SWQSd+ABLWhXBjAH3gZ5a+YODwDuzgjF4QaOLrRBBguwUKThgN8NFQIA3kpIBSh9d2RhU8Aw/T95dB6Gd3gfvI8N542OAVgqG1OYIRV+z/2XlD9GTWjSVj/qras65J7u+NscYwB1JmBjjpXdBhg6oN0D1bn8HjChUERHoBr1oHxWwtIsZ0MTvJW25/MmDZdLvTyafwA"
                                    }
                                }
                            }
                        }
                    },
                    {
                        "output": {
                            "visible": {
                                "output": {
                                    "body": {
                                        "notePayload": {
                                            "noteCommitment": {
                                                "inner": "W+n+Sp2f5dEvEWYW4UBmaRbY4/xUaKPoI5qvNvYajww="
                                            },
                                            "ephemeralKey": "hDbiLGUn3ynlR4lep3JsYvD/eQj99CP0XZYL2Yqgxgw=",
                                            "encryptedNote": {
                                                "inner": "aPpIZgiRD2uvVwayGBAbtGaQ0ADiv66UqjBZhh8c9WZeeEtcFCUhcl2BZUwrLotOb9/QNBriNlZIMp2rCCJ4Bzn2bQ/BsApR0O4UuxU/phLdenD2qa7I36sOokEl1Ul5pE2CmnZlIzjECoj7Ab9kuJ7qSqFkj/+ggSTUideNEo1F5um1K1JGg/ZSYRSRaNuyAqwNVdUeL+M6gbbHrdL5YL8abtqiAcapV/lMn0FMWfY="
                                            }
                                        },
                                        "balanceCommitment": {
                                            "inner": "2D+bRoiX/5zMs71y6H4FZlMK90yQ0OxurOybn7TcBAY="
                                        },
                                        "wrappedMemoKey": "4ACZWalw9Qqc2QkU+mSx3cKwcsxUC47YnHFdp9CDNR+dZ5S7qOlbI8ePQ24uruUE",
                                        "ovkWrappedKey": "P4ld6ikuqrECiMPRrbCdQoU1o3RHW1zvQpA6LvPp9Gm1N/cE0OPHYppqMGhbTm6L"
                                    },
                                    "proof": {
                                        "inner": "3HcjLbRi6AAefnzPPV3c0NyRkX35tihiHLi0Wfixl5zOeCofLzRHL2CZPW2BLaaA/OPKvLgRlIsxrMbN1msWRHR4fCR2LCk0YZJH4AANe92tqQzdPx9rFMqLXv4T+dkAhPCbdEnLyzggpUsc4LTYCeS1uM7kIZOu2Th33SViPO+TkjyE84xWrTzWdEItvpyBeFgZqlAh8+VpuaU6fcshMMMLnQplMUp2aJyXUgSMR9GjspBpCQ7KkBal+sYEkeSA"
                                    }
                                },
                                "note": {
                                    "value": {
                                        "knownAssetId": {
                                            "amount": {
                                                "lo": "2124999036",
                                                "hi": "0"
                                            },
                                            "metadata": {
                                                "description": "The native token of Penumbra",
                                                "denomUnits": [
                                                    {
                                                        "denom": "penumbra",
                                                        "exponent": 6,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "mpenumbra",
                                                        "exponent": 3,
                                                        "aliases": []
                                                    },
                                                    {
                                                        "denom": "upenumbra",
                                                        "exponent": 0,
                                                        "aliases": []
                                                    }
                                                ],
                                                "base": "upenumbra",
                                                "display": "penumbra",
                                                "name": "Penumbra",
                                                "symbol": "UM",
                                                "penumbraAssetId": {
                                                    "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                                    "altBech32m": "",
                                                    "altBaseDenom": ""
                                                },
                                                "images": [
                                                    {
                                                        "png": "",
                                                        "svg": "https://raw.githubusercontent.com/prax-wallet/registry/main/images/um.svg",
                                                        "theme": {
                                                            "primaryColorHex": "#c9a975",
                                                            "circle": false,
                                                            "darkMode": false
                                                        }
                                                    }
                                                ],
                                                "priorityScore": "999999999999",
                                                "badges": [],
                                                "coingeckoId": "penumbra"
                                            },
                                            "equivalentValues": []
                                        }
                                    },
                                    "rseed": "HsDiAKpRHBHZyPRiwnHWpUgrO6l3op2otekTWmOIwUs=",
                                    "address": {
                                        "decoded": {
                                            "address": {
                                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                                "altBech32m": ""
                                            },
                                            "index": {
                                                "account": 0,
                                                "randomizer": ""
                                            },
                                            "walletId": {
                                                "inner": "4V6q7mjztim0fXCyn1sCYshnE7LULq6WewQ2vnXdIwk="
                                            }
                                        }
                                    }
                                },
                                "payloadKey": {
                                    "inner": "VKTgqZx8xJefGIxd0yl5Wm7P6F7Ylf76Z13wQAysuwI="
                                }
                            }
                        }
                    }
                ],
                "transactionParameters": {
                    "expiryHeight": "0",
                    "chainId": "penumbra-1",
                    "fee": {
                        "amount": {
                            "lo": "964",
                            "hi": "0"
                        }
                    }
                },
                "detectionData": {
                    "fmdClues": [
                        {
                            "inner": "MF2ErirHSn4b2skA7CffIe4Y0ZvplZoHjOFxB9EB8whBKib27uTX6iTtk78bXyeBd7dwQG/1LOsN3howdY+7AQAAAAA="
                        }
                    ]
                },
                "memoView": {
                    "visible": {
                        "ciphertext": {
                            "inner": "xJUoZoJ9pScKn7NUeg+kCATntgjLC8OTh5WQG+ADFkCWzsQtZQj7ASyJOatCujbeADdtqtg6AS0A6hkpjNM4vGiMvlewcuZZdLOJ1jCzXbJ5KuwZquYlaVkr+lL/YHupfOVblXWoj+Pgmi9Z22M8pt8MG6Ta9ewXUFbHp62FcRFx7xy4+b6JuqsoHUnG4DBy+RkaAm92XFGm0JLEOthU5KxcV7lAgU544/P5LsECAqj79IgvN2ghVnoGEzg1AFRzEkpI2B30pCYN28ZiBdxYH4w36euG4YHB204xU+6MiInBeEnwai1HcUTBn0lIbYxbk/B93FyiPUHdOewhDs0+zpXGY6WPd2n5vl1pvxPm0w+tAq/9MtjzEWih1iSIKUZcfGFPdQhHdcObvevqbYUeQOQd3axBh3LJ5Lfa1HFpW5zVlPUqx70CmMp3Yb/GbaR1JTrULhYDD6cBNvS/cgZZLcx8nCxvqjMPv6TmzPtUrBo0BJNGtyZgnNnQGaehTtZFrc/AqVOgny+hlbVDJluIDmJRht5502jHIjQ0oISlbUXKAB8l4JjaGB/tU3xrzpZhyiZUDmM7UDDifu1sLvhRkm3FgRbiGQj8xf3GrWTJ4wkPJIKGQgnvEh8boD3zw/Q0BZQvDg63K8Dysb/rDoBBFsrgaBn3yvQKQorsaTqVCycMEUjomaTTVumuCK8t7PQC"
                        },
                        "plaintext": {
                            "returnAddress": {
                                "opaque": {
                                    "address": {
                                        "inner": "yvP8BwNPtWVLlmT10BwR6ueWKSJrseRu1N6X0QSJiMRUTQxccYibmtHetbdBHuTdhwD/84RmttiMdadRuR3xgKcwklhJJjzL2SCu4lnZQa8=",
                                        "altBech32m": ""
                                    }
                                }
                            },
                            "text": ""
                        }
                    }
                }
            },
            "bindingSig": {
                "inner": "eFAkom4WU7c+8b37deuB2XrJ2GNhtR37OruaKmr4ggmG7YdtrNTUwvgYpvo5YfrF7b7FG3PqKQ0g3dEysJVpAQ=="
            },
            "anchor": {
                "inner": "uklH3BRoCr/Km2mWF6kB32TMXg/E3LxPPmlOXDh6OA8="
            }
        },
        "summary": {
            "effects": [
                {
                    "address": {
                        "opaque": {
                            "address": {
                                "inner": "8Ik9WtuifiTTczZmjyiVqG737QD0RG6r6PbauQCmVmU/7pH4k9JSb8cUvpRfNOmacaFtDngpXDU6eoSkxNKZ1koSk/FaOzx6uKJNvAL74Jc=",
                                "altBech32m": ""
                            }
                        }
                    },
                    "balance": {
                        "values": [
                            {
                                "value": {
                                    "amount": {
                                        "lo": "2124999036",
                                        "hi": "0"
                                    },
                                    "assetId": {
                                        "inner": "KeqcLzNx9qSH5+lcJHBB9KNW+YPrBk5dKzvPMiypahA=",
                                        "altBech32m": "",
                                        "altBaseDenom": ""
                                    }
                                },
                                "negated": true
                            }
                        ]
                    }
                }
            ]
        }
    }
]`;
