package com.robot.core.mode.components
{
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.ui.alert.SpecAlert;
   import flash.display.InteractiveObject;
   import flash.events.MouseEvent;
   import org.taomee.utils.Utils;
   
   public class CurePetComponent extends EventComponent
   {
       
      
      private var _func:Function;
      
      public function CurePetComponent(param1:InteractiveObject, param2:Function = null)
      {
         super();
         this._func = param2;
         super.addClickEvent(param1,this.onCurePet);
      }
      
      private function onCurePet(param1:MouseEvent) : void
      {
         var cls:* = undefined;
         var e:MouseEvent = param1;
         if(MainManager.actorInfo.superNono)
         {
            PetManager.cureAll();
            if(this._func != null)
            {
               this._func();
            }
         }
         else
         {
            cls = Utils.getClass("com.robot.app.mapProcess.control.ColorfulPrivilegeWishController") as Class;
            if(cls.bonusType == 1)
            {
               PetManager.cureAll();
               if(this._func != null)
               {
                  this._func();
               }
            }
            else
            {
               SpecAlert.show("恢复精灵体力需要花费50赛尔豆，成为超No用户即可享受永久免费恢复特权！",function():void
               {
                  PetManager.cureAll();
                  if(_func != null)
                  {
                     _func();
                  }
               });
            }
         }
      }
      
      override public function destroy() : void
      {
         this._func = null;
         super.destroy();
      }
   }
}
