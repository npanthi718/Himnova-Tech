# Himnova Technologies — EmailJS HTML Templates Directory

This folder contains 4 production-grade HTML email templates for your **EmailJS Dashboard** (`https://dashboard.emailjs.com/`).

---

## 📁 Included Template Files

1. **`1_admin_contact_notification.html`**
   - **Recipient**: Admin (`support.himnovatech@gmail.com`)
   - **Trigger**: When a client submits the Contact Us form.
   - **Subject Line**: `[NEW INQUIRY] {{from_name}} - {{subject}}`
   - **Features**: Dark enterprise command dashboard UI, client metadata table, highlighted message box, direct 1-click email reply button.

2. **`2_client_contact_confirmation.html`**
   - **Recipient**: Client (`{{from_email}}`)
   - **Trigger**: Sent automatically to the client upon submitting an inquiry.
   - **Subject Line**: `Inquiry Received - Himnova Enterprise Architecture Team`
   - **Features**: Clean corporate brand header, 24-hour SLA guarantee callout, inquiry summary copy, executive signature block.

3. **`3_admin_job_application_notification.html`**
   - **Recipient**: Admin / HR (`support.himnovatech@gmail.com`)
   - **Trigger**: When a candidate submits a job application.
   - **Subject Line**: `[NEW APPLICATION] {{from_name}} - {{applied_role}}`
   - **Features**: Emerald talent pipeline theme, applied position banner, full candidate details (location, experience, portfolio, resume filename), 1-click interview invitation action button.

4. **`4_candidate_job_application_confirmation.html`**
   - **Recipient**: Candidate (`{{from_email}}`)
   - **Trigger**: Sent automatically to the applicant upon submitting their resume/application.
   - **Subject Line**: `Application Received - {{applied_role}} at Himnova Technologies`
   - **Features**: Role confirmation (`{{applied_role}}`), 3-step recruitment timeline workflow, candidate summary badge, contact details.

---

## 🛠️ Step-by-Step EmailJS Setup Instructions

1. Log in to your [EmailJS Dashboard](https://dashboard.emailjs.com/).
2. Go to **Email Templates** -> Click **Create New Template**.
3. In the template editor:
   - Switch to the **Source Code** (`</>`) or **HTML** tab.
   - Open the desired `.html` file from this `email-templates/` directory in any text editor.
   - **Select All (Ctrl+A / Cmd+A)**, copy the HTML, and paste it directly into the EmailJS template editor.
4. Set the **Subject** and **To Email** fields as specified above.
5. Click **Save** in EmailJS.

---

## 🔑 EmailJS Parameter Reference

| Parameter Name              | Form Field / Description                | Example Value                     |
| :-------------------------- | :-------------------------------------- | :-------------------------------- |
| `{{from_name}}`             | Full Name of client or candidate        | `Sushil Sharma`                   |
| `{{from_email}}`            | Email address of client or candidate    | `client@example.com`              |
| `{{phone}}`                 | Contact phone number                    | `+977 9823009467`                 |
| `{{subject}}`               | Project subject / Inquiry category      | `Enterprise Cloud Migration`      |
| `{{message}}`               | Inquiry message or professional summary | `Detailed project requirement...` |
| `{{attachment_url}}`        | Document / Specification URL            | `https://drive.google.com/...`    |
| `{{applied_role}}`          | Job position applied for                | `Software Sales Specialist`       |
| `{{current_location}}`      | Candidate current city & country        | `Kathmandu, Nepal`                |
| `{{years_experience}}`      | Candidate years of experience           | `3+ Years`                        |
| `{{linkedin_url}}`          | LinkedIn or Portfolio link              | `https://linkedin.com/in/...`     |
| `{{resume_filename}}`       | Uploaded resume file name               | `Resume_Sushil_Sharma.pdf`        |
| `{{cover_letter_filename}}` | Uploaded cover letter file name         | `Cover_Letter_Sushil.pdf`         |

For the admin application template, configure EmailJS **Form File Attachments** with parameter
names `resume_file` and `cover_letter_file`. The application uses `emailjs.sendForm()` so files
are uploaded as multipart form data instead of Base64 template variables. Do not configure file
attachments on the candidate confirmation template unless you also want the applicant to receive
copies of the uploaded files.
