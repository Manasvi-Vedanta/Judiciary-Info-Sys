"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

interface Party {
  id: string;
  name: string;
  type: string;
  role: string;
  contact: string;
  phone: string;
  address: string;
  representative: string;
}

interface EditPartyDialogProps {
  party: Party;
  onSave: (party: Party) => void;
}

export function EditPartyDialog({ party, onSave }: EditPartyDialogProps) {
  const [open, setOpen] = useState(false);
  const [editedParty, setEditedParty] = useState(party);

  const handleSave = () => {
    onSave(editedParty);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Party</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Party Information</DialogTitle>
          <DialogDescription>
            Update the party's details and information
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={editedParty.name}
              onChange={(e) =>
                setEditedParty({ ...editedParty, name: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="type">Type</Label>
              <Select
                value={editedParty.type}
                onValueChange={(value) =>
                  setEditedParty({ ...editedParty, type: value })
                }
              >
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Individual">Individual</SelectItem>
                  <SelectItem value="Organization">Organization</SelectItem>
                  <SelectItem value="Government">Government</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role">Role</Label>
              <Select
                value={editedParty.role}
                onValueChange={(value) =>
                  setEditedParty({ ...editedParty, role: value })
                }
              >
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Plaintiff">Plaintiff</SelectItem>
                  <SelectItem value="Defendant">Defendant</SelectItem>
                  <SelectItem value="Witness">Witness</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="contact">Email</Label>
            <Input
              id="contact"
              type="email"
              value={editedParty.contact}
              onChange={(e) =>
                setEditedParty({ ...editedParty, contact: e.target.value })
              }
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              value={editedParty.phone}
              onChange={(e) =>
                setEditedParty({ ...editedParty, phone: e.target.value })
              }
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="address">Address</Label>
            <Textarea
              id="address"
              value={editedParty.address}
              onChange={(e) =>
                setEditedParty({ ...editedParty, address: e.target.value })
              }
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="representative">Legal Representative</Label>
            <Input
              id="representative"
              value={editedParty.representative}
              onChange={(e) =>
                setEditedParty({ ...editedParty, representative: e.target.value })
              }
            />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSave}>Save Changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}