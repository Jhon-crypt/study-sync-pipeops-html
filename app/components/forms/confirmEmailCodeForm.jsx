export default function ConfirmationCodeForm() {

    return (

        <>

            <form>
                <div class="mb-4">
                    <label class="form-label" style={{ fontSize: "16px", fontFamily: "Fredoka, sans-serif", fontWeight: '500' }}>Code</label>
                    <input name="code" type="text" placeholder="Type code here" class="form-control" style={{ backgroundColor: "#F7F2F6", height: "44px", borderRadius: "10px" }} required />
                </div>
                <div className="mt-5 mb-3 d-grid">
                    <button type="submit" className="btn btn-block border-0 text-white px-5 py-2" style={{ fontFamily: "Fredoka, sans-serif", background: "linear-gradient(to right, #D95388, #85486e)" }}>
                        Next
                    </button>

                </div>
            </form>

        </>

    )

}