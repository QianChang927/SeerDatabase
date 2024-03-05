package com.robot.app.extFun
{
   import com.robot.app.mapProcess.control.PetPracticeController;
   import com.robot.core.manager.MapManager;
   import com.robot.core.mode.IExtFun;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alert;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   
   public class ExtFun_50 implements IExtFun
   {
       
      
      private var _ui:Sprite;
      
      public function ExtFun_50()
      {
         super();
      }
      
      public function setup(param1:Sprite, param2:Object) : void
      {
         this._ui = param1;
         this._ui.addEventListener(MouseEvent.CLICK,this.onClick);
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         SocketConnection.send(1022,86049591);
         Alert.show("天赋修炼器正在维修中，暂时无法使用了哦！你可以前往精灵中心使用精灵养成机培养你的精灵哦！",function():void
         {
            MapManager.changeMap(5);
         });
      }
      
      public function destory() : void
      {
         this._ui.removeEventListener(MouseEvent.CLICK,this.onClick);
         this._ui = null;
      }
      
      private function get frame() : uint
      {
         if(PetPracticeController.times == 0)
         {
            if(Math.random() >= 0.5)
            {
               return 1;
            }
            return 2;
         }
         if(PetPracticeController.times == 1)
         {
            if(Math.random() >= 0.5)
            {
               return 3;
            }
            return 4;
         }
         return 0;
      }
   }
}
