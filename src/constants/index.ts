export const JOB_TYPES = ['Full-Time', 'Part-Time', 'Remote', 'Internship'] as const


type Options = Array<{
  value: string, 
  label: string
}>

export const jobListingColumns:string[] =[
  'Roles',
  'Status',
  'Date Posted',
  'Due Date',
  'Job Type',
  'Applicants',
  'Needs'
]

export const jobListingData = [
  {
    roles: 'Brand Designer',
    status: 'Live',
    datePosted: '10 Agustus 2023',
    dueDate: "20 November 2023",
    jobType: 'Full-Time',
    applicants: 1,
    needs: 10
  },
  
]

export const jobApplicantHeader = [
  "Name",
  "Action"
]

export const jobApplicantData = [
  {
    name: 'Elon Musk',
    appliedDate: '25 Agustus 2023'
  }
]

export const locationOptions = [
  {
    value: 'jakarta',
    label: 'Jakarta'
  },
  {
    value: 'bandung',
    label: 'Bandung'
  },
  {
    value: 'tangerang',
    label: 'Tangerang'
  },
]

export const employeeOptions: Options = [
  {
    value: '1',
    label: '0 - 10'
  },
  {
    value: '2',
    label: '11 - 50'
  },
  {
    value: '3',
    label: '51 - 200'
  },
  {
    value: '4',
    label: '201 - 500'
  },
  {
    value: '5',
    label: '501 - 1,000'
  },
  {
    value: '6',
    label: '1,001 - 5,000'
  },
  {
    value: '7',
    label: '5,001 - 10,000'
  },
  {
    value: '8',
    label: '> 10,000'
  }
]

export const industryOptions: Options = [
  {
    value: "technology",
    label: "Technology"
  },
  {
    value: 'law-firm',
    label: 'Law Firm'
  },
  {
    value: 'finance',
    label: 'Finance'
  },
  {
    value: 'consultant',
    label: 'Consultant'
  },
  {
    value: 'property',
    label: 'Property'
  },
]