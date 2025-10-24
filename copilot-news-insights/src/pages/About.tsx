import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, GraduationCap, User } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-2">About This Workshop</h1>
          <p className="text-muted-foreground text-lg">
            GitHub Copilot News Analysis Workshop
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Created By
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-2">
              <strong>Dr Simon Wang</strong>
            </p>
            <p className="text-muted-foreground">
              Lecturer in English and Innovation Officer<br />
              Language Centre, Hong Kong Baptist University
            </p>
            <a 
              href="https://lc.hkbu.edu.hk/main/simonwang/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-block mt-2"
            >
              View Profile →
            </a>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Course Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <p className="font-semibold">Course</p>
              <p className="text-muted-foreground">Jour3105 Current Issues in Journalism</p>
            </div>
            <div>
              <p className="font-semibold">Instructor</p>
              <p className="text-muted-foreground">Prof Xiangwei Wang</p>
            </div>
            <div>
              <p className="font-semibold">Department</p>
              <p className="text-muted-foreground">
                Department of Journalism<br />
                School of Communications<br />
                Hong Kong Baptist University
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Venue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg">CVA 202</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start gap-4 p-3 rounded-lg bg-muted/50">
                <div className="font-semibold min-w-24">Session 1</div>
                <div className="text-muted-foreground">28 Oct, 3:30pm - 4:30pm</div>
              </div>
              <div className="flex items-start gap-4 p-3 rounded-lg bg-muted/50">
                <div className="font-semibold min-w-24">Session 2</div>
                <div className="text-muted-foreground">4 Nov, 3:30pm - 4:30pm</div>
              </div>
              <div className="flex items-start gap-4 p-3 rounded-lg bg-muted/50">
                <div className="font-semibold min-w-24">Session 3</div>
                <div className="text-muted-foreground">11 Nov, 3:30pm - 4:30pm</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
