import React from 'react';

function EmployeeSearchForm() {
    return (
        <form>
            <div class="input-group">
                <input
                    type="text"
                    class="form-control"
                    placeholder="Search employee"
                />
                <div class="input-group-append">
                    <button class="btn btn-outline-primary" type="button">
                        Search
                    </button>
                </div>
            </div>
        </form>
    );
}

export default EmployeeSearchForm;
