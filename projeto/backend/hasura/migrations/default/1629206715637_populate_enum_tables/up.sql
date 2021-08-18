INSERT INTO public.command_type VALUES
('sleep', NULL),
('wake_up', NULL);

INSERT INTO public.role (title, description, path) VALUES 
('owner', 'Owner of a lab, can do anything including deleting the lab itself', 'owner'),
('admin', 'Admin of a lab, can bestow editor and viewer permissions to other users, but cannot create new admins', 'owner.admin'),
('editor', 'Cannot create nor delete new resources, but can edit existing ones', 'owner.admin.editor'),
('viewer', 'Can only see existing resources but cannot edit them in any way', 'owner.admin.editor.viewer');