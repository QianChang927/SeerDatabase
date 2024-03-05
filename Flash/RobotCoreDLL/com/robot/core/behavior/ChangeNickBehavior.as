package com.robot.core.behavior
{
   import com.robot.core.CommandID;
   import com.robot.core.event.UserEvent;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import flash.utils.ByteArray;
   
   public class ChangeNickBehavior extends BaseBehavior
   {
       
      
      private var _nick:String;
      
      public function ChangeNickBehavior(param1:String, param2:Boolean = true)
      {
         super(param2);
         this._nick = param1;
      }
      
      override public function execute(param1:BasePeoleModel) : void
      {
         var _loc2_:ByteArray = null;
         if(_isNet)
         {
            _loc2_ = new ByteArray();
            _loc2_.writeUTFBytes(this._nick);
            _loc2_.length = 16;
            SocketConnection.send(CommandID.CHANG_NICK_NAME,_loc2_);
         }
         else
         {
            param1.setNick(this._nick);
            UserManager.dispatchEvent(new UserEvent(UserEvent.INFO_CHANGE,param1.info));
         }
      }
   }
}
