// Application Data
const appData = {
  "healthMetrics": {
    "steps": {"current": 8547, "goal": 10000, "weeklyAverage": 8234},
    "heartRate": {"current": 72, "resting": 65, "max": 185},
    "sleep": {"lastNight": 7.5, "quality": 85, "weeklyAverage": 7.2},
    "water": {"current": 6, "goal": 8, "glasses": []},
    "weight": {"current": 68.5, "goal": 65, "trend": "decreasing"},
    "calories": {"consumed": 1850, "burned": 2200, "remaining": 350}
  },
  "therapists": [
    {
      "id": 1,
      "name": "Dr. Sarah Johnson",
      "specialty": "Anxiety & Depression",
      "rating": 4.8,
      "experience": 8,
      "image": "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face",
      "available": true,
      "hourlyRate": 120,
      "nextAvailable": "2025-10-02T10:00:00Z"
    },
    {
      "id": 2, 
      "name": "Dr. Michael Chen",
      "specialty": "PTSD & Trauma",
      "rating": 4.9,
      "experience": 12,
      "image": "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face", 
      "available": true,
      "hourlyRate": 140,
      "nextAvailable": "2025-10-02T14:00:00Z"
    },
    {
      "id": 3,
      "name": "Dr. Emily Rodriguez", 
      "specialty": "Relationship Counseling",
      "rating": 4.7,
      "experience": 6,
      "image": "https://images.unsplash.com/photo-1594824475317-e3ad3c68c1f0?w=200&h=200&fit=crop&crop=face",
      "available": false,
      "hourlyRate": 110,
      "nextAvailable": "2025-10-03T09:00:00Z"
    }
  ],
  "appointments": [
    {
      "id": 1,
      "therapist": "Dr. Sarah Johnson",
      "date": "2025-10-02T10:00:00Z",
      "type": "Video Session",
      "status": "confirmed",
      "notes": "Weekly check-in session"
    },
    {
      "id": 2,
      "therapist": "Dr. Michael Chen", 
      "date": "2025-10-05T14:00:00Z",
      "type": "In-Person",
      "status": "pending", 
      "notes": "EMDR therapy session"
    }
  ],
  "courses": [
    {
      "id": 1,
      "title": "JavaScript Fundamentals",
      "progress": 65,
      "totalLessons": 24,
      "completedLessons": 16,
      "difficulty": "Beginner",
      "image": "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop"
    },
    {
      "id": 2,
      "title": "React Development", 
      "progress": 32,
      "totalLessons": 18,
      "completedLessons": 6,
      "difficulty": "Intermediate",
      "image": "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=300&h=200&fit=crop"
    },
    {
      "id": 3,
      "title": "Node.js Backend",
      "progress": 0,
      "totalLessons": 20,
      "completedLessons": 0, 
      "difficulty": "Intermediate",
      "image": "https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=300&h=200&fit=crop"
    }
  ],
  "projects": [
    {
      "id": 1,
      "name": "Personal Portfolio",
      "status": "in-progress", 
      "progress": 75,
      "technologies": ["HTML", "CSS", "JavaScript"],
      "lastUpdated": "2025-09-29T16:30:00Z"
    },
    {
      "id": 2,
      "name": "Todo App",
      "status": "completed",
      "progress": 100, 
      "technologies": ["React", "Node.js", "MongoDB"],
      "lastUpdated": "2025-09-25T12:00:00Z"
    }
  ],
  "communityPosts": [
    {
      "id": 1,
      "author": "Alex M.",
      "title": "Completed my first coding bootcamp!",
      "content": "Just finished a 12-week intensive program. Ready for my first dev job!",
      "timestamp": "2025-09-29T10:15:00Z",
      "likes": 24,
      "comments": 8
    },
    {
      "id": 2,
      "author": "Sarah K.",
      "title": "Meditation helped my anxiety",
      "content": "Been practicing daily meditation for 3 months now. My anxiety levels have decreased significantly.",
      "timestamp": "2025-09-28T14:22:00Z", 
      "likes": 18,
      "comments": 12
    }
  ],
  "streaks": {
    "exercise": 7,
    "meditation": 12,
    "coding": 5,
    "waterIntake": 4
  },
  "user": {
    "name": "Sahil",
    "profileImage": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    "joinedDate": "2025-07-15",
    "totalPoints": 2840,
    "level": "Wellness Warrior"
  }
};

// Global variables
let stepsChart = null;
let heartRateChart = null;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize Application
function initializeApp() {
    setupNavigation();
    loadDashboardData();
    loadHealthData();
    loadCounselorData();
    loadLearningData();
    loadCommunityData();
    setupCharts();
    setupCommunityTabs();
}

// Navigation Setup
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.content-section');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetSection = this.dataset.section;
            
            // Update active nav item
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
            
            // Update active section
            sections.forEach(section => section.classList.remove('active'));
            document.getElementById(targetSection).classList.add('active');
            
            // Load section-specific data
            if (targetSection === 'health') {
                setupCharts();
            }
        });
    });
}

// Load Dashboard Data
function loadDashboardData() {
    // Update user name
    document.getElementById('user-name').textContent = appData.user.name;
    
    // Update health metrics
    document.getElementById('steps-count').textContent = appData.healthMetrics.steps.current.toLocaleString();
    document.getElementById('heart-rate').textContent = appData.healthMetrics.heartRate.current;
    document.getElementById('sleep-hours').textContent = appData.healthMetrics.sleep.lastNight + 'h';
    document.getElementById('water-glasses').textContent = `${appData.healthMetrics.water.current}/${appData.healthMetrics.water.goal}`;
}

// Load Health Data
function loadHealthData() {
    // Health metrics are already loaded in dashboard
    // Additional health-specific functionality can be added here
}

// Load Counselor Data
function loadCounselorData() {
    loadAppointments();
    loadTherapists();
    populateTherapistSelect();
}

// Load Appointments
function loadAppointments() {
    const appointmentsList = document.getElementById('appointments-list');
    appointmentsList.innerHTML = '';
    
    appData.appointments.forEach(appointment => {
        const appointmentElement = createAppointmentElement(appointment);
        appointmentsList.appendChild(appointmentElement);
    });
}

// Create Appointment Element
function createAppointmentElement(appointment) {
    const div = document.createElement('div');
    div.className = 'appointment-item';
    
    const date = new Date(appointment.date);
    const formattedDate = date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
    
    div.innerHTML = `
        <div class="appointment-details">
            <h4>${appointment.therapist}</h4>
            <div class="appointment-meta">${formattedDate} • ${appointment.type}</div>
            <div class="appointment-status ${appointment.status}">${appointment.status}</div>
            <div class="appointment-notes">${appointment.notes}</div>
        </div>
        <div class="appointment-actions">
            <button class="btn btn--sm btn--primary" onclick="joinSession(${appointment.id})">
                ${appointment.type === 'Video Session' ? 'Join Call' : 'View Details'}
            </button>
        </div>
    `;
    
    return div;
}

// Load Therapists
function loadTherapists() {
    const therapistsGrid = document.getElementById('therapists-grid');
    therapistsGrid.innerHTML = '';
    
    appData.therapists.forEach(therapist => {
        const therapistElement = createTherapistElement(therapist);
        therapistsGrid.appendChild(therapistElement);
    });
}

// Create Therapist Element
function createTherapistElement(therapist) {
    const div = document.createElement('div');
    div.className = 'card therapist-card';
    
    const stars = '★'.repeat(Math.floor(therapist.rating)) + '☆'.repeat(5 - Math.floor(therapist.rating));
    const availabilityClass = therapist.available ? 'available' : 'busy';
    const availabilityText = therapist.available ? 'Available' : 'Busy';
    
    div.innerHTML = `
        <div class="availability-badge ${availabilityClass}">${availabilityText}</div>
        <div class="card__body">
            <div class="therapist-header">
                <img src="${therapist.image}" alt="${therapist.name}" class="therapist-image">
                <div class="therapist-info">
                    <h3>${therapist.name}</h3>
                    <div class="therapist-specialty">${therapist.specialty}</div>
                    <div class="therapist-rating">
                        <span class="rating-stars">${stars}</span>
                        <span>${therapist.rating}</span>
                    </div>
                </div>
            </div>
            <div class="therapist-meta">
                <span>${therapist.experience} years experience</span>
                <span>$${therapist.hourlyRate}/hour</span>
            </div>
            <button class="btn btn--primary btn--full-width" onclick="bookTherapist(${therapist.id})" ${!therapist.available ? 'disabled' : ''}>
                ${therapist.available ? 'Book Session' : 'Unavailable'}
            </button>
        </div>
    `;
    
    return div;
}

// Populate Therapist Select
function populateTherapistSelect() {
    const select = document.getElementById('therapist-select');
    select.innerHTML = '<option value="">Choose a therapist...</option>';
    
    appData.therapists.forEach(therapist => {
        const option = document.createElement('option');
        option.value = therapist.id;
        option.textContent = `${therapist.name} - ${therapist.specialty}`;
        option.disabled = !therapist.available;
        select.appendChild(option);
    });
}

// Load Learning Data
function loadLearningData() {
    loadCourses();
    loadProjects();
}

// Load Courses
function loadCourses() {
    const coursesGrid = document.getElementById('courses-grid');
    coursesGrid.innerHTML = '';
    
    appData.courses.forEach(course => {
        const courseElement = createCourseElement(course);
        coursesGrid.appendChild(courseElement);
    });
}

// Create Course Element
function createCourseElement(course) {
    const div = document.createElement('div');
    div.className = 'card course-card';
    
    div.innerHTML = `
        <div class="card__body">
            <img src="${course.image}" alt="${course.title}" class="course-image">
            <div class="course-title">${course.title}</div>
            <div class="course-meta">
                <span class="difficulty-badge ${course.difficulty.toLowerCase()}">${course.difficulty}</span>
                <span>${course.completedLessons}/${course.totalLessons} lessons</span>
            </div>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${course.progress}%"></div>
            </div>
            <div class="progress-text">${course.progress}% Complete</div>
            <button class="btn btn--primary btn--full-width mt-8" onclick="continueCourse(${course.id})">
                ${course.progress === 0 ? 'Start Course' : 'Continue'}
            </button>
        </div>
    `;
    
    return div;
}

// Load Projects
function loadProjects() {
    const projectsList = document.getElementById('projects-list');
    projectsList.innerHTML = '';
    
    appData.projects.forEach(project => {
        const projectElement = createProjectElement(project);
        projectsList.appendChild(projectElement);
    });
}

// Create Project Element
function createProjectElement(project) {
    const div = document.createElement('div');
    div.className = 'project-item';
    
    const lastUpdated = new Date(project.lastUpdated).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric'
    });
    
    div.innerHTML = `
        <div class="project-info">
            <h4>${project.name}</h4>
            <div class="project-status">Status: ${project.status} • Updated ${lastUpdated}</div>
            <div class="project-tech">
                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
        </div>
        <div class="project-progress">
            <div class="progress-bar" style="width: 100px;">
                <div class="progress-fill" style="width: ${project.progress}%"></div>
            </div>
            <span>${project.progress}%</span>
        </div>
    `;
    
    return div;
}

// Load Community Data
function loadCommunityData() {
    loadPosts();
}

// Load Posts
function loadPosts() {
    const postsList = document.getElementById('posts-list');
    postsList.innerHTML = '';
    
    appData.communityPosts.forEach(post => {
        const postElement = createPostElement(post);
        postsList.appendChild(postElement);
    });
}

// Create Post Element
function createPostElement(post) {
    const div = document.createElement('div');
    div.className = 'post-item';
    
    const timeAgo = getTimeAgo(new Date(post.timestamp));
    
    div.innerHTML = `
        <div class="post-header">
            <div class="post-author">${post.author}</div>
            <div class="post-time">${timeAgo}</div>
        </div>
        <div class="post-title">${post.title}</div>
        <div class="post-content">${post.content}</div>
        <div class="post-actions">
            <span class="post-action" onclick="likePost(${post.id})">👍 ${post.likes}</span>
            <span class="post-action" onclick="commentPost(${post.id})">💬 ${post.comments}</span>
            <span class="post-action" onclick="sharePost(${post.id})">📤 Share</span>
        </div>
    `;
    
    return div;
}

// Setup Charts
function setupCharts() {
    setupStepsChart();
    setupHeartRateChart();
}

// Setup Steps Chart
function setupStepsChart() {
    const ctx = document.getElementById('stepsChart');
    if (!ctx) return;
    
    if (stepsChart) {
        stepsChart.destroy();
    }
    
    const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const stepsData = [7234, 8547, 9123, 6789, 10234, 8876, 9543];
    
    stepsChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: weekdays,
            datasets: [{
                label: 'Daily Steps',
                data: stepsData,
                borderColor: '#1FB8CD',
                backgroundColor: 'rgba(31, 184, 205, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Setup Heart Rate Chart
function setupHeartRateChart() {
    const ctx = document.getElementById('heartRateChart');
    if (!ctx) return;
    
    if (heartRateChart) {
        heartRateChart.destroy();
    }
    
    const times = ['6AM', '9AM', '12PM', '3PM', '6PM', '9PM'];
    const heartRateData = [65, 68, 72, 85, 78, 70];
    
    heartRateChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: times,
            datasets: [{
                label: 'Heart Rate (BPM)',
                data: heartRateData,
                borderColor: '#FFC185',
                backgroundColor: 'rgba(255, 193, 133, 0.1)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 60,
                    max: 100,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });
}

// Setup Community Tabs
function setupCommunityTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetTab = this.dataset.tab;
            
            // Update active tab button
            tabBtns.forEach(tab => tab.classList.remove('active'));
            this.classList.add('active');
            
            // Update active tab content
            tabContents.forEach(content => content.classList.remove('active'));
            document.getElementById(targetTab + '-tab').classList.add('active');
        });
    });
}

// Health Tracker Functions
function addWater() {
    if (appData.healthMetrics.water.current < appData.healthMetrics.water.goal) {
        appData.healthMetrics.water.current++;
        document.getElementById('water-glasses').textContent = `${appData.healthMetrics.water.current}/${appData.healthMetrics.water.goal}`;
        
        // Update dashboard water display
        const dashboardWater = document.querySelector('#dashboard .metric-item:last-child .metric-value');
        if (dashboardWater) {
            dashboardWater.textContent = `${appData.healthMetrics.water.current}/${appData.healthMetrics.water.goal}`;
        }
        
        // Update health section water display
        const healthWater = document.querySelector('#health .health-metric:last-child .metric-number');
        if (healthWater) {
            healthWater.innerHTML = `${appData.healthMetrics.water.current}/${appData.healthMetrics.water.goal} <span class="metric-unit">glasses</span>`;
        }
        
        showNotification('Water logged! Keep staying hydrated! 💧', 'success');
    } else {
        showNotification('Great job! You\'ve reached your daily water goal! 🎉', 'info');
    }
}

// Counselor Functions
function showBookingForm() {
    document.getElementById('booking-modal').classList.remove('hidden');
}

function hideBookingForm() {
    document.getElementById('booking-modal').classList.add('hidden');
}

function bookTherapist(therapistId) {
    const therapist = appData.therapists.find(t => t.id === therapistId);
    if (therapist) {
        // Pre-select the therapist in the booking form
        document.getElementById('therapist-select').value = therapistId;
        showBookingForm();
    }
}

function confirmBooking() {
    const therapistId = document.getElementById('therapist-select').value;
    const sessionType = document.getElementById('session-type').value;
    const sessionDate = document.getElementById('session-date').value;
    const sessionTime = document.getElementById('session-time').value;
    
    if (!therapistId || !sessionDate || !sessionTime) {
        showNotification('Please fill in all required fields.', 'error');
        return;
    }
    
    const therapist = appData.therapists.find(t => t.id == therapistId);
    const newBooking = {
        id: appData.appointments.length + 1,
        therapist: therapist.name,
        date: `${sessionDate}T${sessionTime}:00Z`,
        type: sessionType === 'video' ? 'Video Session' : 'In-Person',
        status: 'confirmed',
        notes: 'Newly booked session'
    };
    
    appData.appointments.push(newBooking);
    loadAppointments();
    hideBookingForm();
    showNotification(`Session booked with ${therapist.name}!`, 'success');
}

function joinSession(appointmentId) {
    const appointment = appData.appointments.find(a => a.id === appointmentId);
    if (appointment && appointment.type === 'Video Session') {
        showNotification('Joining video session... Please wait.', 'info');
        // In a real app, this would open the video call interface
    } else {
        showNotification('Session details viewed.', 'info');
    }
}

// Learning Functions
function continueCourse(courseId) {
    const course = appData.courses.find(c => c.id === courseId);
    if (course) {
        showNotification(`Opening ${course.title}...`, 'info');
        // In a real app, this would navigate to the course content
    }
}

// AI Coach Functions
function sendCoachMessage() {
    const input = document.getElementById('coach-input');
    const message = input.value.trim();
    
    if (!message) return;
    
    addMessageToChat(message, 'user');
    input.value = '';
    
    // Simulate AI response
    setTimeout(() => {
        const responses = [
            "That's a great question! Based on your health data, I'd recommend focusing on consistency rather than intensity.",
            "I can see you're making good progress with your wellness goals. Let's build on that momentum!",
            "Your sleep quality has been improving. Have you been following the evening routine we discussed?",
            "Remember, small consistent changes lead to big results. You're doing great!",
            "Based on your activity levels, you might want to consider adding some mindfulness exercises to your routine."
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addMessageToChat(randomResponse, 'coach');
    }, 1500);
}

function askCoach(question) {
    document.getElementById('coach-input').value = question;
    sendCoachMessage();
}

function addMessageToChat(message, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit' 
    });
    
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${message}</p>
        </div>
        <div class="message-time">${timeString}</div>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Community Functions
function createPost() {
    showNotification('Post creation feature coming soon!', 'info');
}

function likePost(postId) {
    const post = appData.communityPosts.find(p => p.id === postId);
    if (post) {
        post.likes++;
        loadPosts();
        showNotification('Post liked!', 'success');
    }
}

function commentPost(postId) {
    showNotification('Comment feature coming soon!', 'info');
}

function sharePost(postId) {
    showNotification('Post shared!', 'success');
}

// Utility Functions
function getTimeAgo(date) {
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 60) {
        return `${minutes}m ago`;
    } else if (hours < 24) {
        return `${hours}h ago`;
    } else {
        return `${days}d ago`;
    }
}

function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 12px 20px;
        background: var(--color-surface);
        border: 1px solid var(--color-${type === 'success' ? 'success' : type === 'error' ? 'error' : 'primary'});
        color: var(--color-${type === 'success' ? 'success' : type === 'error' ? 'error' : 'primary'});
        border-radius: var(--radius-base);
        box-shadow: var(--shadow-lg);
        z-index: 1001;
        max-width: 300px;
        animation: slideIn 0.3s ease-out;
    `;
    notification.textContent = message;
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add CSS for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(notificationStyles);