function toggleDropdown() {
    let menu = document.getElementById("dropdownMenu");
    let profile = document.querySelector(".user-profile");

    menu.style.display = (menu.style.display === "block") ? "none" : "block";
    profile.classList.toggle("active");
}
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");

    // Toggle sidebar when clicking menu button
    menuToggle.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    // Close sidebar when clicking outside of it
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });
});


//side bar function
    function setActive(element) {
        
        document.querySelectorAll(".menu li").forEach(item => {
            item.classList.remove("active");
        });

        
        element.classList.add("active");
    }

  // date checker
    document.addEventListener("DOMContentLoaded", function () {
        const dateInput = document.getElementById("date-input");
    
        
        function getTodayDate() {
            const today = new Date();
            const yyyy = today.getFullYear();
            let mm = today.getMonth() + 1; 
            let dd = today.getDate();
    
            
            mm = mm < 10 ? "0" + mm : mm;
            dd = dd < 10 ? "0" + dd : dd;
    
            return `${yyyy}-${mm}-${dd}`;
        }
    
    
        dateInput.value = getTodayDate();
    });
    


// modal
    document.addEventListener("DOMContentLoaded", function () {
        const modal = document.getElementById("modal");
        const serviceTitle = document.getElementById("service-title");
        const tableBody = document.querySelector("#modal table tbody");
        const closeModal = document.querySelector(".close");
        const serviceGrid = document.querySelector(".service-grid");
        const table = document.querySelector("#modal table");
    
        // Sample service data dagdagan pa
        const serviceData = {
            "Wheel Alignment": [
                { customer: "Justin Kurt Munar", date: "20/01/25", vehicle: "Ford F1" },
                { customer: "James Doe", date: "22/01/25", vehicle: "Toyota Corolla" }
            ],
            "Engine Oil Change": [
                { customer: "Mark Smith", date: "10/03/24", vehicle: "Honda Civic" },
                { customer: "Alice Brown", date: "15/05/24", vehicle: "BMW X5" }
            ]
        };
    
        function openService(serviceName) {
            serviceTitle.innerText = serviceName;
            tableBody.innerHTML = ""; 
    
           
            console.log("Opening Service:", serviceName);
    
            
            const normalizedServiceName = Object.keys(serviceData).find(
                key => key.toLowerCase() === serviceName.toLowerCase()
            );
    
            if (normalizedServiceName) {
                
                table.innerHTML = `
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Vehicle</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                `;
                const newTableBody = table.querySelector("tbody");
    
                serviceData[normalizedServiceName].forEach(service => {
                    let row = document.createElement("tr");
                    row.innerHTML = `
                        <td>${service.customer}</td>
                        <td><b>${service.date}</b></td>
                        <td>${service.vehicle}</td>
                    `;
                    newTableBody.appendChild(row);
                });
            } else {
                table.innerHTML = `
                    <thead>
                        <tr>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Vehicle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td colspan="3">No records found</td></tr>
                    </tbody>
                `;
            }
    
            modal.style.display = "flex";
            serviceGrid.classList.add("blur-services"); // Apply blur effect ONLY to service cards
        }
    
       
        document.querySelectorAll(".service-card").forEach(card => {
            card.addEventListener("click", function () {
                const serviceName = this.querySelector(".overlay").textContent.trim();
                openService(serviceName);
            });
        });
    
        
        function closeService() {
            modal.style.display = "none";
            serviceGrid.classList.remove("blur-services"); // Remove blur effect
        }
    
        closeModal.addEventListener("click", closeService);
    
       
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeService();
            }
        });
    });
    

    function toggleSidebar() {
        var sidebar = document.getElementById("sidebar");
        if (sidebar.style.display === "none" || sidebar.style.display === "") {
            sidebar.style.display = "flex";
        } else {
            sidebar.style.display = "none";
        }
    }


    function openService(serviceName) {
        console.log("Opening Service:", serviceName);
    
        // Get modal and set the service title
        var modal = document.getElementById("modal");
        var title = document.getElementById("service-title");
    
        title.textContent = serviceName; // Update modal title
        modal.style.display = "block"; // Show modal
    }
    
    // Close modal when clicking the close button
    document.addEventListener("DOMContentLoaded", function () {
        var closeButton = document.querySelector(".close");
        if (closeButton) {
            closeButton.addEventListener("click", function () {
                document.getElementById("modal").style.display = "none";
            });
        }
    });
    