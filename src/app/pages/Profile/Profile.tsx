import { UserSvg } from '../../../assets/UserSvg'
import { CameraIcon } from '../../../assets/CameraIcon'
import { EditIcon } from '../../../assets/EditIcon'
import { NotificationsIcon } from '../../../assets/NotificationsIcon'
import { SecurityIcon } from '../../../assets/SecurityIcon'
import { CreditCardIcon } from '../../../assets/CreditCardIcon'
import { ChevronRightIcon } from '../../../assets/ChevronRightIcon'
import { HelpIcon } from '../../../assets/HelpIcon'
import { LogoutIcon } from '../../../assets/LogoutIcon'

export function Profile() {
  return (
    <>
      <section className="flex flex-col w-full h-fit items-center gap-6">
        <h2 className="font-bold text-2xl w-full text-left mb-2">Settings</h2>

        {/* Profile Avatar */}
        <div className="relative">
          <div className="w-24 h-24 bg-primary/10 rounded-full flex justify-center items-center overflow-hidden">
            <UserSvg className="w-16 h-16 text-muted-foreground"/>
          </div>
          <div className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex justify-center items-center cursor-pointer hover:bg-primary/90 transition-colors">
            <CameraIcon className="w-5 h-5 text-primary-foreground"/>
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex flex-col items-center gap-1">
          <h3 className="font-bold text-xl text-foreground">Alex Freelancer</h3>
          <p className="text-sm text-muted-foreground">alex@freelanceflow.com</p>
          <span className="mt-2 px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full">
            PRO MEMBER
          </span>
        </div>
      </section>

      {/* General Section */}
      <section className="flex flex-col w-full gap-4 mt-8">
        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">General</h4>
        
        <div className="flex flex-col gap-2 bg-background rounded-2xl p-2">
          {/* Edit Profile */}
          <button className="flex items-center gap-4 p-4 hover:bg-muted rounded-xl transition-colors w-full">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex justify-center items-center shrink-0">
              <EditIcon className="w-5 h-5 text-primary"/>
            </div>
            <span className="font-medium text-left flex-1 text-foreground">Edit Profile</span>
            <ChevronRightIcon className="w-5 h-5 text-muted-foreground shrink-0"/>
          </button>

          {/* Notifications */}
          <button className="flex items-center gap-4 p-4 hover:bg-muted rounded-xl transition-colors w-full">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex justify-center items-center shrink-0">
              <NotificationsIcon className="w-5 h-5 text-primary"/>
            </div>
            <span className="font-medium text-left flex-1 text-foreground">Notifications</span>
            <ChevronRightIcon className="w-5 h-5 text-muted-foreground shrink-0"/>
          </button>

          {/* Security & Privacy */}
          <button className="flex items-center gap-4 p-4 hover:bg-muted rounded-xl transition-colors w-full">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex justify-center items-center shrink-0">
              <SecurityIcon className="w-5 h-5 text-primary"/>
            </div>
            <span className="font-medium text-left flex-1 text-foreground">Security & Privacy</span>
            <ChevronRightIcon className="w-5 h-5 text-muted-foreground shrink-0"/>
          </button>
        </div>
      </section>

      {/* Preferences Section */}
      <section className="flex flex-col w-full gap-4 mt-6">
        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Preferences</h4>
        
        <div className="flex flex-col gap-2 bg-background rounded-2xl p-2">
          {/* Billing & Subscription */}
          <button className="flex items-center gap-4 p-4 hover:bg-muted rounded-xl transition-colors w-full">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex justify-center items-center shrink-0">
              <CreditCardIcon className="w-5 h-5 text-primary"/>
            </div>
            <span className="font-medium text-left flex-1 text-foreground">Billing & Subscription</span>
            <ChevronRightIcon className="w-5 h-5 text-muted-foreground shrink-0"/>
          </button>
        </div>
      </section>

      {/* Account Section */}
      <section className="flex flex-col w-full gap-4 mt-6">
        <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Account</h4>
        
        <div className="flex flex-col gap-2 bg-background rounded-2xl p-2">
          {/* Help & Support */}
          <button className="flex items-center gap-4 p-4 hover:bg-muted rounded-xl transition-colors w-full">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex justify-center items-center shrink-0">
              <HelpIcon className="w-5 h-5 text-primary"/>
            </div>
            <span className="font-medium text-left flex-1 text-foreground">Help & Support</span>
            <ChevronRightIcon className="w-5 h-5 text-muted-foreground shrink-0"/>
          </button>

          {/* Sign Out */}
          <button className="flex items-center gap-4 p-4 hover:bg-accent/10 rounded-xl transition-colors w-full">
            <div className="w-10 h-10 bg-accent/10 rounded-full flex justify-center items-center shrink-0">
              <LogoutIcon className="w-5 h-5 text-accent"/>
            </div>
            <span className="font-medium text-left flex-1 text-accent">Sign Out</span>
            <ChevronRightIcon className="w-5 h-5 text-muted-foreground shrink-0"/>
          </button>
        </div>
      </section>
    </>
  )
}