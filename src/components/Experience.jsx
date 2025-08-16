import { Briefcase } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Briefcase className="w-5 h-5"/> Experience & Highlights</h2>
      <ul className="space-y-4 list-disc pl-6 marker:text-primary">
        <li>Hands-on with CUDA 11.2/12.6 + cuDNN (TensorFlow & PyTorch pipelines), environment setup and troubleshooting.</li>
        <li>Built custom CNNs and modified MobileNetV2/ResNet18 heads; experimented with channel attention; sequence models (LSTM) for temporal smoothing.</li>
        <li>Solid OOP foundations in Java/C#; Networking theory (HTTP/HTTPS, OSI), and practical CI/CD usage.</li>
        <li>High academic performance (GPA 99) and strong research orientation.</li>
      </ul>
    </section>
  )
}
