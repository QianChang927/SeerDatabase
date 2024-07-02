package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.utils.DisplayUtil;
   
   public class PetCurePanel
   {
       
      
      private var _parent:MovieClip;
      
      private var _ui:MovieClip;
      
      public function PetCurePanel(parent:MovieClip, ui:MovieClip)
      {
         super();
         this._parent = parent;
         this._ui = ui;
      }
      
      public function show() : void
      {
         if(BitBuffSetClass.getState(22439))
         {
            if(MainManager.actorInfo.isVip)
            {
               this._ui.autoReply.okBtn.gotoAndStop(2);
            }
            else
            {
               BitBuffSetClass.setState(22439,0,function():void
               {
                  _ui.autoReply.okBtn.gotoAndStop(1);
               });
            }
         }
         KTool.setBrightness(this._parent,-0.3);
         this._parent.mouseChildren = this._parent.mouseEnabled = false;
         LevelManager.appLevel.addChild(this._ui);
         this.addEvents();
      }
      
      private function addEvents() : void
      {
         this._ui.closeBtn.addEventListener(MouseEvent.CLICK,this.onClose);
         this._ui.allReply.addEventListener(MouseEvent.CLICK,this.onAllReply);
         this._ui.autoReply.addEventListener(MouseEvent.CLICK,this.onAuto);
      }
      
      protected function onAuto(event:MouseEvent) : void
      {
         var mc:MovieClip = null;
         var bl:Boolean = false;
         var myNum:int = 0;
         mc = event.currentTarget as MovieClip;
         if(MainManager.actorInfo.isVip)
         {
            bl = Boolean(BitBuffSetClass.getState(22439));
            if(bl)
            {
               myNum = 0;
            }
            else
            {
               myNum = 1;
            }
            BitBuffSetClass.setState(22439,myNum,function():void
            {
               if(myNum == 1)
               {
                  PetManager.upDate();
               }
               mc["okBtn"].gotoAndStop(bl ? 1 : 2);
               mc.mouseEnabled = true;
               mc.mouseChildren = true;
            });
         }
         else
         {
            Alarm.show("很抱歉，该特权仅限VIP用户使用！");
         }
      }
      
      protected function onAllReply(event:MouseEvent) : void
      {
         if(PetManager.length + PetManager.secondLength > 0)
         {
            PetManager.cureAllFree();
         }
      }
      
      protected function onClose(event:MouseEvent) : void
      {
         this.hide();
      }
      
      private function hide() : void
      {
         this._ui.closeBtn.removeEventListener(MouseEvent.CLICK,this.onClose);
         this._ui.allReply.removeEventListener(MouseEvent.CLICK,this.onAllReply);
         this._ui.autoReply.removeEventListener(MouseEvent.CLICK,this.onAuto);
         KTool.setBrightness(this._parent,0);
         this._parent.mouseChildren = this._parent.mouseEnabled = true;
         DisplayUtil.removeForParent(this._ui);
      }
      
      public function destroy() : void
      {
         this.hide();
         this._parent = null;
         this._ui = null;
      }
   }
}
