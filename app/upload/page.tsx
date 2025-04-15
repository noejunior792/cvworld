"use client"

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Upload, FileText, Loader2 } from "lucide-react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [jsonResult, setJsonResult] = useState<any>(null);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const { toast } = useToast();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const uploadedFile = acceptedFiles[0];
    if (uploadedFile?.type !== 'application/pdf') {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file",
        variant: "destructive",
      });
      return;
    }
    setFile(uploadedFile);
    setPdfUrl(URL.createObjectURL(uploadedFile));
    setJsonResult(null);
  }, [toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    maxFiles: 1
  });

  const processResume = async () => {
    if (!file) return;

    setIsProcessing(true);
    try {
      // Simulate AI processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock result
      setJsonResult({
        name: "John Doe",
        email: "john@example.com",
        skills: ["JavaScript", "React", "Node.js"],
        experience: [
          {
            company: "Tech Corp",
            position: "Senior Developer",
            duration: "2020-2023"
          }
        ],
        education: [
          {
            institution: "University of Technology",
            degree: "Computer Science",
            year: "2019"
          }
        ]
      });

      toast({
        title: "Success",
        description: "Resume processed successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to process resume",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Upload Your Resume</h1>
          <p className="text-muted-foreground">
            Drop your PDF resume and let our AI extract the important information
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div
              {...getRootProps()}
              className={`
                border-2 border-dashed rounded-lg p-8 transition-colors
                ${isDragActive 
                  ? 'border-primary bg-primary/10' 
                  : 'border-border hover:border-primary/50'
                }
              `}
            >
              <input {...getInputProps()} />
              <div className="flex flex-col items-center text-center space-y-4">
                <Upload className="h-12 w-12 text-muted-foreground" />
                <div>
                  <p className="font-medium">
                    {isDragActive
                      ? "Drop your PDF here"
                      : "Drag & drop your resume PDF here"}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    or click to select a file
                  </p>
                </div>
              </div>
            </div>

            {file && (
              <Card className="p-4">
                <div className="flex items-center space-x-4">
                  <FileText className="h-8 w-8 text-primary" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{file.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                  <Button
                    onClick={processResume}
                    disabled={isProcessing}
                  >
                    {isProcessing && (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Process
                  </Button>
                </div>
              </Card>
            )}

            {pdfUrl && (
              <Card className="p-4 h-[400px] overflow-auto">
                <iframe
                  src={pdfUrl}
                  className="w-full h-full"
                  title="PDF Preview"
                />
              </Card>
            )}
          </div>

          <div>
            <Card className="p-4 h-full bg-card/50 backdrop-blur">
              <h2 className="text-xl font-semibold mb-4">Extracted Data</h2>
              {isProcessing ? (
                <div className="flex flex-col items-center justify-center h-[400px] space-y-4">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  <p className="text-muted-foreground">Processing your resume...</p>
                </div>
              ) : jsonResult ? (
                <pre className="p-4 rounded-lg bg-card overflow-auto h-[400px] text-sm">
                  <code className="text-foreground">
                    {JSON.stringify(jsonResult, null, 2)}
                  </code>
                </pre>
              ) : (
                <div className="flex flex-col items-center justify-center h-[400px] text-muted-foreground">
                  <FileText className="h-12 w-12 mb-4" />
                  <p>Upload and process a resume to see the extracted data</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}