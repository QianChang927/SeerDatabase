package com.robot.app.mapProcess
{
   import com.robot.app.ogre.OgreController;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.TasksManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import flash.utils.getDefinitionByName;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_350 extends BaseMapProcess
   {
       
      
      private var isPlayMove:Boolean;
      
      private var _wishesBtn:MovieClip;
      
      private var _wishTig:MovieClip;
      
      private var _acceptWish:uint = 0;
      
      public function MapProcess_350()
      {
         super();
      }
      
      override protected function init() : void
      {
         topLevel.mouseChildren = false;
         topLevel.mouseEnabled = false;
         this._wishTig = depthLevel["wishTig"];
         getDefinitionByName("com.robot.app2.mapProcess.control.MengYouYiActionController").initMap350(this);
         this.onCheckTasks();
      }
      
      private function onCheckTasks() : void
      {
         if(TasksManager.getTaskStatus(423) == TasksManager.COMPLETE)
         {
            depthLevel["ltMc"].gotoAndStop(2);
         }
         this.intWish();
         this.isPlayMove = BufferRecordManager.getState(MainManager.actorInfo,157);
         if(!this.isPlayMove)
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("head350Movie"),function():void
            {
               BufferRecordManager.setState(MainManager.actorInfo,157,true);
            });
         }
      }
      
      public function intWish() : void
      {
         this._wishTig.buttonMode = true;
         ToolTipManager.add(depthLevel["wishTig"],"点击乐土圆心许愿");
         this._wishesBtn = depthLevel["wishTig"];
         this._wishesBtn.addEventListener(MouseEvent.CLICK,this.makeWish);
      }
      
      private function makeWish(param1:MouseEvent) : void
      {
         var _loc2_:uint = uint(TasksManager.getTaskStatus(423));
         if(_loc2_ == TasksManager.UN_ACCEPT && this._acceptWish == 0)
         {
            SocketConnection.send(CommandID.ACCEPT_DAILY_TASK,423);
            this._acceptWish = 1;
         }
         if(_loc2_ == TasksManager.COMPLETE)
         {
            Alarm.show("今天你已经许过愿啦，不能太贪心哦！");
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("StrawberryWishPanel"),"正在打开面板");
         }
      }
      
      override public function destroy() : void
      {
         this._wishesBtn = null;
         this._wishTig = null;
         OgreController.isShow = true;
         ToolBarController.showOrHideAllUser(true);
         getDefinitionByName("com.robot.app2.mapProcess.control.MengYouYiActionController").destroy();
      }
   }
}
