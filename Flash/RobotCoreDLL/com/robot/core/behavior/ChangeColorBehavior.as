package com.robot.core.behavior
{
   import com.robot.core.CommandID;
   import com.robot.core.controller.SaveUserInfo;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   
   public class ChangeColorBehavior extends BaseBehavior
   {
       
      
      private var _color:uint;
      
      public function ChangeColorBehavior(param1:uint, param2:Boolean = true)
      {
         super(param2);
         this._color = param1;
      }
      
      override public function execute(param1:BasePeoleModel) : void
      {
         if(_isNet)
         {
            SocketConnection.send(CommandID.CHANGE_COLOR,this._color);
         }
         else
         {
            param1.skeleton.changeColor(this._color);
            param1.info.color = this._color;
            param1.info.texture = 0;
            SaveUserInfo.saveSo();
         }
      }
   }
}
