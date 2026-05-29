import { useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { User, CreditCard, Upload, Calendar, CheckCircle, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useLocalStorage } from "@/hooks/use-local-storage"

const SERVICES = ["Debit Card", "Online Banking", "Mobile Banking", "Overdraft Protection"] as const

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  accountType: string
  services: string[]
  meetingType: string
  date: string
  time: string
  notes: string
}

const EMPTY_FORM: FormData = {
  firstName: "", lastName: "", email: "", phone: "", address: "",
  accountType: "", services: [],
  meetingType: "", date: "", time: "", notes: "",
}

export function OnboardingSection() {
  const [currentStep, setCurrentStep] = useLocalStorage<number>("finovia-onboarding-step", 1)
  const [formData, setFormData] = useLocalStorage<FormData>("finovia-onboarding-data", EMPTY_FORM)

  const totalSteps = 4

  const steps = [
    { number: 1, title: "Personal Info", icon: User },
    { number: 2, title: "Select Product", icon: CreditCard },
    { number: 3, title: "Upload Docs", icon: Upload },
    { number: 4, title: "Schedule", icon: Calendar },
  ]

  const updateField = useCallback((field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }, [setFormData])

  const toggleService = useCallback((service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service],
    }))
  }, [setFormData])

  const nextStep = useCallback(() => { if (currentStep < totalSteps) setCurrentStep(currentStep + 1) }, [currentStep, totalSteps, setCurrentStep])
  const prevStep = useCallback(() => { if (currentStep > 1) setCurrentStep(currentStep - 1) }, [currentStep, setCurrentStep])

  const handleComplete = useCallback(() => {
    setCurrentStep(1)
    setFormData(EMPTY_FORM)
  }, [setCurrentStep, setFormData])

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <Badge variant="secondary" className="mb-4 px-3 py-1 rounded-full text-blue-600 bg-blue-50 dark:bg-blue-900/30 dark:text-blue-400 border-none font-medium">
            Get Started
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            Open Your Account in Minutes
          </h2>
          <p className="text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
            Our streamlined onboarding process gets you banking with Finovia in just a few simple steps.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Step Indicators */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-5 overflow-x-auto gap-1 pb-1">
              {steps.map((step, i) => (
                <div key={step.number} className="flex items-center flex-1 min-w-0">
                  <div className="flex flex-col items-center flex-1 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 transition-all duration-300 shrink-0 ${
                        currentStep > step.number
                          ? "bg-blue-600 border-blue-600 text-white"
                          : currentStep === step.number
                          ? "bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-500/30"
                          : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-400"
                      }`}
                    >
                      {currentStep > step.number
                        ? <CheckCircle className="h-5 w-5" />
                        : <step.icon className="h-4.5 w-4.5" />
                      }
                    </div>
                    <span className={`mt-2 text-xs font-semibold whitespace-nowrap text-center ${
                      currentStep >= step.number ? "text-blue-600 dark:text-blue-400" : "text-gray-400"
                    }`}>
                      {step.title}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`h-0.5 flex-1 mx-2 mb-5 transition-colors duration-300 ${
                      currentStep > step.number ? "bg-blue-600" : "bg-gray-200 dark:bg-gray-700"
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <Progress value={(currentStep / totalSteps) * 100} className="h-1.5 rounded-full" />
          </div>

          {/* Form Card */}
          <Card className="border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden">
            <CardHeader className="px-8 pt-8 pb-6 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">
                    Step {currentStep} of {totalSteps}
                  </CardTitle>
                  <CardDescription className="mt-1 text-sm">
                    {currentStep === 1 && "Let's start with your basic information"}
                    {currentStep === 2 && "Choose the products that fit your needs"}
                    {currentStep === 3 && "Upload your identification documents"}
                    {currentStep === 4 && "Schedule a meeting with our team"}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="rounded-full text-xs">
                  {Math.round((currentStep / totalSteps) * 100)}% done
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step 1 */}
                  {currentStep === 1 && (
                    <div className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName" className="text-sm font-medium">First Name</Label>
                          <Input
                            id="firstName"
                            placeholder="John"
                            className="h-11 rounded-xl"
                            value={formData.firstName}
                            onChange={e => updateField("firstName", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName" className="text-sm font-medium">Last Name</Label>
                          <Input
                            id="lastName"
                            placeholder="Doe"
                            className="h-11 rounded-xl"
                            value={formData.lastName}
                            onChange={e => updateField("lastName", e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="h-11 rounded-xl"
                          value={formData.email}
                          onChange={e => updateField("email", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          className="h-11 rounded-xl"
                          value={formData.phone}
                          onChange={e => updateField("phone", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="address" className="text-sm font-medium">Home Address</Label>
                        <Input
                          id="address"
                          placeholder="123 Main St, City, State 12345"
                          className="h-11 rounded-xl"
                          value={formData.address}
                          onChange={e => updateField("address", e.target.value)}
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 2 */}
                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Select Account Type</Label>
                        <Select value={formData.accountType} onValueChange={v => updateField("accountType", v)}>
                          <SelectTrigger className="h-11 rounded-xl">
                            <SelectValue placeholder="Choose an account type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="checking">Smart Checking</SelectItem>
                            <SelectItem value="savings">High-Yield Savings</SelectItem>
                            <SelectItem value="business">Business Banking</SelectItem>
                            <SelectItem value="student">Student Account</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-3">
                        <Label className="text-sm font-medium">Additional Services</Label>
                        {SERVICES.map((item) => (
                          <div
                            key={item}
                            onClick={() => toggleService(item)}
                            className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-100 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 hover:bg-blue-50/40 dark:hover:bg-blue-900/10 hover:shadow-sm transition-all duration-200 cursor-pointer group"
                          >
                            <Checkbox
                              id={item}
                              checked={formData.services.includes(item)}
                              onCheckedChange={() => toggleService(item)}
                              className="rounded transition-transform duration-150 group-hover:scale-110"
                            />
                            <Label
                              htmlFor={item}
                              className="text-sm font-normal text-gray-600 dark:text-gray-300 cursor-pointer group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200"
                            >
                              {item}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 3 */}
                  {currentStep === 3 && (
                    <div className="space-y-6">
                      {[
                        { label: "Government-issued ID", hint: "Driver's license or passport" },
                        { label: "Proof of Address", hint: "Utility bill or bank statement" },
                      ].map(({ label, hint }) => (
                        <div key={label} className="space-y-2">
                          <Label className="text-sm font-medium">{label}</Label>
                          <div className="border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-2xl p-8 text-center hover:border-blue-400 dark:hover:border-blue-600 hover:bg-blue-50/30 dark:hover:bg-blue-900/10 hover:shadow-inner transition-all duration-250 cursor-pointer group">
                            <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-gray-800 flex items-center justify-center mx-auto mb-3 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 group-hover:scale-110 transition-all duration-250">
                              <Upload className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
                            </div>
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">Drop file here or click to upload</p>
                            <p className="text-xs text-gray-400">{hint}</p>
                            <Button variant="outline" size="sm" className="mt-4 rounded-lg bg-transparent">
                              Choose File
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Step 4 */}
                  {currentStep === 4 && (
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">Meeting Type</Label>
                        <Select value={formData.meetingType} onValueChange={v => updateField("meetingType", v)}>
                          <SelectTrigger className="h-11 rounded-xl">
                            <SelectValue placeholder="Choose meeting type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="video">Video Call</SelectItem>
                            <SelectItem value="phone">Phone Call</SelectItem>
                            <SelectItem value="branch">Branch Visit</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="date" className="text-sm font-medium">Preferred Date</Label>
                          <Input
                            id="date"
                            type="date"
                            className="h-11 rounded-xl"
                            value={formData.date}
                            onChange={e => updateField("date", e.target.value)}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">Preferred Time</Label>
                          <Select value={formData.time} onValueChange={v => updateField("time", v)}>
                            <SelectTrigger className="h-11 rounded-xl">
                              <SelectValue placeholder="Select time" />
                            </SelectTrigger>
                            <SelectContent>
                              {["9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"].map((t) => (
                                <SelectItem key={t} value={t.replace(":", "").replace(" ", "").toLowerCase()}>{t}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="notes" className="text-sm font-medium">Additional Notes (Optional)</Label>
                        <Input
                          id="notes"
                          placeholder="Any specific questions or requirements?"
                          className="h-11 rounded-xl"
                          value={formData.notes}
                          onChange={e => updateField("notes", e.target.value)}
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="h-11 px-6 rounded-xl bg-transparent"
                >
                  Previous
                </Button>
                {currentStep < totalSteps ? (
                  <Button onClick={nextStep} className="h-11 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
                    Next Step
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleComplete}
                    className="h-11 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 shadow-lg shadow-blue-500/20"
                  >
                    Complete Application
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
