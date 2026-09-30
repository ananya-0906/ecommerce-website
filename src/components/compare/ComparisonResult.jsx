import "./ComparisonResult.css";

function ComparisonResult({ product1, product2 }) {

    return (
        <section className="comparison-result">

            <div className="comparison-table">

                <div className="comparison-row comparison-header">
                    <div>Brand</div>
                    <div>{product1.brand || "—"}</div>
                    <div>{product2.brand || "—"}</div>
                </div>

                <div className="comparison-row">
                    <div>Category</div>
                    <div>{product1.category || "—"}</div>
                    <div>{product2.category || "—"}</div>
                </div>

                <div className="comparison-row">
                    <div>Price</div>
                    <div>
                        ₹{product1.price?.toLocaleString() || "—"}
                    </div>
                    <div>
                        ₹{product2.price?.toLocaleString() || "—"}
                    </div>
                </div>

                <div className="comparison-row">
                    <div>Active Noise Cancellation</div>
                    <div>{product1.activeNoiseCancellation || "—"}</div>
                    <div>{product2.noiseCancellation || "—"}</div>
                </div>

                <div className="comparison-row">
                    <div>Bluetooth Multipoint</div>
                    <div>{product1.bluetoothMultipoint || "—"}</div>
                    <div>{product2.bluetoothMultipoint || "—"}</div>
                </div>

                <div className="comparison-row">
                    <div>Battery Life</div>
                    <div>{product1.batteryLife || "—"}</div>
                    <div>{product2.battery || "—"}</div>
                </div>


                <div className="comparison-row">
                    <div>Connectivity</div>
                    <div>{product1.connectivity || "—"}</div>
                    <div>{product2.connectivity || "—"}</div>
                </div>

            </div>

        </section>
    );
}

export default ComparisonResult;