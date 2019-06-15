import { AdminPermission, Warning } from '../../../../models';

export default async (parent, args, context) => {
  if (context.user === null)
    throw new Error('You must be logged in to complete this action.');

  const warning = await Warning.findOne({
    _id: args.warningID
  });
  if (warning === null) throw new Error('Warning not found.');

  const requestingAdmin = await AdminPermission.findOne({
    server: warning.server,
    admin: context.user
  });
  if (requestingAdmin === null)
    throw new Error('You do not have permission to do that.');

  await warning.delete();
  return warning;
};