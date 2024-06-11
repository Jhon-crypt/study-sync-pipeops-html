export default function SaveGpaModal() {

    return (

        <>

            <div class="modal fade" id="saveGpaModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" id="saveGpaModal">
                    <div class="modal-content">
                        <div class="modal-header border-bottom-0 pb-0 mb-0">
                            <button type="button" class="btn-close border border-dark rounded-circle btn-sm" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body mb-3 p-0">
                           <div className="d-flex align-justify-center justify-content-center">
                                <i className="bi bi-check-circle-fill" style={{ fontSize: "100px", color: "#00A33C" }}></i>
                           </div>
                           <p className="text-center" style={{ fontFamily: "Fredoka, sans-serif", fontSize: "25px", color: "#7B4D75" }}>Saved</p>
                        </div>
                        
                    </div>
                </div>
            </div>

        </>

    )

}