(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    [22], {
        "8c2d": function(t, e, a) {
            "use strict";
            a.r(e);
            var s = function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("q-page", { attrs: { padding: "" } }, [a("div", { staticClass: "row justify-center items-stretch" }, [a("div", { staticClass: "container-box" }, [a("div", { staticClass: "row items-stretch q-col-gutter-lg q-mb-md" }, [a("div", { staticClass: "col-12" }, [a("q-card", { staticClass: "grow-box", attrs: { flat: "" } }, [a("div", { staticClass: "row items-stretch" }, [a("div", { staticClass: "col-xs-12 col-sm-6" }, [a("q-card-section", [a("div", { staticClass: "q-mb-sm text-grey-6" }, [t._v(t._s(t.$t("Next Reward")))]), a("div", { staticClass: "q-mb-sm" }, ["" === t.tokenInfo.nextRebase ? a("q-skeleton", { staticClass: "text-h5", attrs: { type: "text", width: "100px" } }) : a("countdown-text", { staticClass: "text-h5", attrs: { "target-second": t.tokenInfo.nextRebase } })], 1), a("div", { staticClass: "text-grey-5" }, [t._v("\n                    " + t._s(t.$t("Interest Coming In Your Wallet")) + "\n                  ")])])], 1), a("div", { staticClass: "col-xs-12 col-sm-6" }, [a("q-card", { staticClass: "fit grow-box", attrs: { flat: "" } }, [a("q-card-section", [a("div", { staticClass: "q-mb-sm text-grey-6" }, [t._v(t._s(t.$t("Your share/Marketcap")))]), a("div", { staticClass: "q-mb-sm" }, ["" === t.tokenInfo.balanceFiat || "" === t.tokenInfo.marketCap ? a("q-skeleton", { staticClass: "text-h5", attrs: { type: "text", width: "100px" } }) : a("span", { staticClass: "text-h5 text-green" }, [t._v(t._s((100 * t.tokenInfo.balanceFiat / t.tokenInfo.marketCap).toFixed(5)) + "%")])], 1)])], 1)], 1)])])], 1), a("div", { staticClass: "col-12" }, [a("q-card", { staticClass: "grow-box", attrs: { flat: "" } }, [a("div", { staticClass: "row items-stretch" }, [a("div", { staticClass: "col-xs-12 col-sm-6" }, [a("q-card-section", [a("div", { staticClass: "q-mb-sm text-grey-6" }, [t._v("APY")]), a("div", { staticClass: "q-mb-sm" }, ["" === t.tokenInfo.apy ? a("q-skeleton", { staticClass: "text-h5", attrs: { type: "text", width: "100px" } }) : a("span", { staticClass: "text-h5 text-green" }, [t._v(t._s(parseFloat(t.tokenInfo.apy.toFixed(2)).toLocaleString()) + "%")])], 1), a("div", { staticClass: "text-grey-5" }, [t._v("\n                    " + t._s(t.$t("Daily ROI")) + " " + t._s(parseFloat(t.tokenInfo.aprDaily.toFixed(2)).toLocaleString()) + "%\n                  ")])])], 1), a("div", { staticClass: "col-xs-12 col-sm-6" }, [a("q-card", { staticClass: "fit grow-box", attrs: { flat: "" } }, [a("q-card-section", [a("div", { staticClass: "q-mb-sm text-grey-6" }, [t._v(t._s(t.$t("Your Balance")))]), a("div", { staticClass: "q-mb-sm" }, ["" === t.tokenInfo.balanceFiat ? a("q-skeleton", { staticClass: "text-h5", attrs: { type: "text", width: "100px" } }) : a("span", { staticClass: "text-h5 text-green" }, [t._v("$" + t._s(parseFloat(t.tokenInfo.balanceFiat.toFixed(2)).toLocaleString()))])], 1), a("div", { staticClass: "text-grey-5" }, ["" === t.tokenInfo.balance ? a("q-skeleton", { attrs: { type: "text", width: "100px" } }) : a("span", [t._v(t._s(parseFloat(parseFloat(t.tokenInfo.balance).toFixed(2)).toLocaleString()) + " FEFE")])], 1)])], 1)], 1)])])], 1), a("div", { staticClass: "col-12" }, [a("q-card", { staticClass: "grow-box", attrs: { flat: "" } }, [a("div", { staticClass: "row items-stretch" }, [a("div", { staticClass: "col-xs-12 col-sm-6" }, [a("q-card-section", [a("div", { staticClass: "q-mb-sm text-grey-6" }, [t._v(t._s(t.$t("Your Earnings/Daily")))]), a("div", { staticClass: "q-mb-sm" }, ["" === t.tokenInfo.dailyEarnFiat ? a("q-skeleton", { staticClass: "text-h5", attrs: { type: "text", width: "100px" } }) : a("span", { staticClass: "text-h5 text-green" }, [t._v("$" + t._s(parseFloat(t.tokenInfo.dailyEarnFiat.toFixed(2)).toLocaleString()))])], 1), a("div", { staticClass: "text-grey-5" }, ["" === t.tokenInfo.dailyEarn ? a("q-skeleton", { attrs: { type: "text", width: "100px" } }) : a("span", [t._v("\n                        " + t._s(parseFloat(t.tokenInfo.dailyEarn.toFixed(2)).toLocaleString()) + " FEFE\n                      ")])], 1)])], 1), a("div", { staticClass: "col-xs-12 col-sm-6" }, [a("q-card", { staticClass: "fit grow-box", attrs: { flat: "" } }, [a("q-card-section", [a("div", { staticClass: "row items-center" }, [a("div", { staticClass: "col-auto" }, [a("div", { staticClass: "q-mb-sm text-grey-6" }, [t._v(t._s(t.$t("Your total earned")))]), a("div", { staticClass: "q-mb-sm" }, ["" === t.totalEarned ? a("q-skeleton", { staticClass: "text-h5", attrs: { type: "text", width: "100px" } }) : a("span", { staticClass: "text-h5 text-green" }, [t._v("$" + t._s(parseFloat((t.totalEarned * t.tokenInfo.price).toFixed(2)).toLocaleString()))])], 1), a("div", { staticClass: "text-grey-5" }, ["" === t.totalEarned ? a("q-skeleton", { attrs: { type: "text", width: "100px" } }) : a("span", [t._v("\n                        " + t._s(parseFloat(parseFloat(t.totalEarned).toFixed(2)).toLocaleString()) + " FEFE\n                      ")])], 1)]), a("div", { staticClass: "col-grow" }, [a("a", { staticClass: "text-primary text-h6", attrs: { href: "https://trackbsc.com/earnings?token=0x598019F45b1C4e6EcC68e282c761A07734Ea0025", target: "_blank" } }, [t._v(t._s(t.$t("Track here")))])])])])], 1)], 1)])])], 1), a("div", { staticClass: "col-12" }, [a("div", { staticClass: "row items-stretch q-col-gutter-md" }, [a("div", { staticClass: "col-xs-12 col-md-6" }, [a("q-card", { staticClass: "grow-box", attrs: { flat: "" } }, [a("q-card-section", [a("q-list", [a("q-item", [a("q-item-section", [a("q-item-label", [t._v(t._s(t.$t("Next Reward Amount")))])], 1), a("q-item-section", { staticClass: "text-white", attrs: { side: "" } }, [a("q-item-label", [t._v(t._s(t.tokenInfo.nextReward ? parseFloat(t.tokenInfo.nextReward.toFixed(2)).toLocaleString() : "") + " FEFE")])], 1)], 1), a("q-item", [a("q-item-section", [a("q-item-label", [t._v(t._s(t.$t("Next Reward Amount USD")))])], 1), a("q-item-section", { staticClass: "text-white", attrs: { side: "" } }, [a("q-item-label", { staticClass: "text-green" }, [t._v(t._s(t.tokenInfo.nextRewardFiat ? parseFloat(t.tokenInfo.nextRewardFiat.toFixed(2)).toLocaleString() : "") + " USD")])], 1)], 1), a("q-item", [a("q-item-section", [a("q-item-label", [t._v(t._s(t.$t("Next Reward Yield")))])], 1), a("q-item-section", { staticClass: "text-white", attrs: { side: "" } }, [a("q-item-label", [t._v(t._s(t.tokenInfo.nextRewardYield ? t.tokenInfo.nextRewardYield.toFixed(5) : "") + "%")])], 1)], 1), a("q-item", [a("q-item-section", [a("q-item-label", [t._v(t._s(t.$t("ROI (30-Day Rate)")))])], 1), a("q-item-section", { staticClass: "text-white", attrs: { side: "" } }, [a("q-item-label", { staticClass: "text-green" }, [t._v(t._s(t.tokenInfo.monthROI) + "%")])], 1)], 1), a("q-item", [a("q-item-section", [a("q-item-label", [t._v(t._s(t.$t("ROI (30-Day Rate)")) + " USD")])], 1), a("q-item-section", { staticClass: "text-white", attrs: { side: "" } }, [a("q-item-label", { staticClass: "text-green" }, [t._v(t._s(t.tokenInfo.monthROIFiat ? parseFloat(t.tokenInfo.monthROIFiat.toFixed(2)).toLocaleString() : "") + " USD")])], 1)], 1)], 1)], 1)], 1), a("q-card", { staticClass: "grow-box q-mt-lg", attrs: { flat: "" } }, [a("q-card-section", [a("div", { staticClass: "row justify-center q-col-gutter-lg" }, [a("div", { staticClass: "col-auto text-center" }, [a("q-btn", { attrs: { unelevated: "", color: "blue", type: "a", href: "https://docs.google.com/spreadsheets/d/1tcPooSLZxer3tG5Cq3wNO0wuNCgGbHQvNLRjUENflg8/edit#gid=1555252024", target: "_blank" } }, [t._v("\n                        " + t._s(t.$t("3 steps to financial freedom")) + "\n                      ")]), a("div", { staticClass: "text-right" }, [t._v(t._s(t.$t("(by Libero Leo, Libero.financial lead dev)")))])], 1), t.tokenInfo.balance > 0 ? a("div", { staticClass: "col-auto" }, [a("q-btn", { attrs: { unelevated: "", color: "orange", type: "a", href: t.exchangeLink, target: "_blank" } }, [t._v("\n                        " + t._s(t.$t("CASHING OUT")) + " 1% ( " + t._s(t.inputAmount) + " $FEFE )\n                      ")])], 1) : t._e()])])], 1)], 1), a("div", { staticClass: "col-xs-12 col-md-6" }, [a("q-img", { staticClass: "rounded-borders", attrs: { src: "/landing/libero.webp", contain: "" } })], 1)])])]), a("card-steps")], 1)])])
                },
                i = [],
                o = (a("e9c4"), a("2f62")),
                n = a("a00e"),
                l = a("d8b7"),
                c = { components: { CardSteps: l["a"], CountdownText: n["a"] }, computed: {...Object(o["b"])({ isLogon: "auth/isLogon", getAccount: "auth/getAccount", getTokenInfo: "farm/getTokenInfo" }), tokenInfo() { return JSON.parse(JSON.stringify(this.getTokenInfo)) }, inputAmount() { return parseFloat((.01 * this.tokenInfo.balance).toFixed(2)) }, exchangeLink() { return "https://thoreum.capital/exchange/?outputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56&inputCurrency=" + this.$contracts.mainToken.address + "&inputAmount=" + this.inputAmount } }, data() { return { totalEarned: "" } }, watch: { getAccount: function(t) { "" !== t && this.getTotalEarned() } }, methods: { getTotalEarned() { this.$axios.post("/api/farm/v1/earned", { address: this.getAccount }).then((t => { this.totalEarned = t.data.data > 0 ? t.data.data : "" })) } }, mounted() { this.isLogon && this.getTotalEarned(), this.interval = setInterval(this.getTotalEarned, 3e4) }, beforeDestroy() { this.interval && clearInterval(this.interval) } },
                r = c,
                d = a("2877"),
                x = a("9989"),
                m = a("f09f"),
                v = a("a370"),
                C = a("293e"),
                g = a("1c1c"),
                p = a("66e5"),
                q = a("4074"),
                b = a("0170"),
                h = a("9c40"),
                f = a("068f"),
                _ = a("eebe"),
                u = a.n(_),
                k = Object(d["a"])(r, s, i, !1, null, null, null);
            e["default"] = k.exports;
            u()(k, "components", { QPage: x["a"], QCard: m["a"], QCardSection: v["a"], QSkeleton: C["a"], QList: g["a"], QItem: p["a"], QItemSection: q["a"], QItemLabel: b["a"], QBtn: h["a"], QImg: f["a"] })
        }
    }
]);