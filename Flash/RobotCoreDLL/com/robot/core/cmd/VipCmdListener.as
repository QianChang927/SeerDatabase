package com.robot.core.cmd
{
   import com.robot.core.CommandID;
   import com.robot.core.event.UserEvent;
   import com.robot.core.info.NonoInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.NonoManager;
   import com.robot.core.manager.UserInfoManager;
   import com.robot.core.manager.UserManager;
   import com.robot.core.mode.BasePeoleModel;
   import com.robot.core.net.SocketConnection;
   import flash.events.Event;
   import flash.utils.ByteArray;
   import org.taomee.bean.BaseBean;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.BitUtil;
   
   public class VipCmdListener extends BaseBean
   {
       
      
      public function VipCmdListener()
      {
         super();
      }
      
      override public function start() : void
      {
         SocketConnection.addCmdListener(CommandID.VIP_CO,this.onChange);
         SocketConnection.addCmdListener(CommandID.GET_SUPER_VALUE,this.vipValueChange);
         finish();
      }
      
      private function vipValueChange(param1:SocketEvent = null) : void
      {
         var e:SocketEvent = param1;
         SocketConnection.sendWithCallback(46066,function(param1:SocketEvent):void
         {
            var ee:SocketEvent = param1;
            UserInfoManager.upDateSimpleInfo(MainManager.actorInfo,function():void
            {
               UserInfoManager.upDateMoreInfo(MainManager.actorInfo,function():void
               {
                  EventManager.dispatchEvent(new Event(UserEvent.VIP_INFO_CHANGED));
               });
            });
         });
      }
      
      private function onChange(param1:SocketEvent) : void
      {
         var model:BasePeoleModel = null;
         var info:NonoInfo = null;
         var e:SocketEvent = param1;
         var data:ByteArray = e.data as ByteArray;
         var userID:uint = data.readUnsignedInt();
         var flag:uint = data.readUnsignedInt();
         var autoCharge:uint = data.readUnsignedInt();
         var vipEndTime:uint = data.readUnsignedInt();
         var tmp:uint = data.readUnsignedByte();
         var isSuperNono:Boolean = Boolean(flag);
         var isExtremeNono:Boolean = Boolean(BitUtil.getBit(tmp,1));
         var shouldShowMsg:Boolean = Boolean(BitUtil.getBit(tmp,7));
         if(MainManager.actorID == userID)
         {
            MainManager.actorInfo.vip = flag;
            MainManager.actorInfo.autoCharge = autoCharge;
            MainManager.actorInfo.vipEndTime = vipEndTime;
            MainManager.actorInfo.superNono = isSuperNono;
            MainManager.actorInfo.isExtremeNono = isExtremeNono;
            MainManager.actorModel.switchNameDO();
            if(flag == 0)
            {
               if(NonoManager.info)
               {
                  NonoManager.info.superNono = false;
                  NonoManager.info.isExtremeNono = false;
                  MainManager.actorModel.hideNono();
                  MainManager.actorModel.showNono(NonoManager.info,MainManager.actorInfo.actionType);
                  SocketConnection.send(CommandID.NONO_FOLLOW_OR_HOOM,1);
               }
            }
            else if(flag == 1)
            {
               if(NonoManager.info)
               {
                  NonoManager.info.superNono = isSuperNono;
                  NonoManager.info.isExtremeNono = isExtremeNono;
                  MainManager.actorModel.hideNono();
                  MainManager.actorModel.showNono(NonoManager.info,MainManager.actorInfo.actionType);
                  SocketConnection.send(CommandID.NONO_FOLLOW_OR_HOOM,1);
               }
            }
         }
         else
         {
            model = UserManager.getUserModel(userID);
            if(model)
            {
               model.info.superNono = isSuperNono;
               model.info.isExtremeNono = isExtremeNono;
               model.switchNameDO();
               if(model.nono)
               {
                  model.nono.info.superNono = isSuperNono;
                  model.nono.info.isExtremeNono = isExtremeNono;
                  info = model.nono.info;
                  model.hideNono();
                  model.showNono(info,model.info.actionType);
               }
            }
         }
         EventManager.dispatchEvent(new Event(UserEvent.VIP_INFO_CHANGED));
         SocketConnection.sendWithCallback(46066,function(param1:SocketEvent):void
         {
            var ee:SocketEvent = param1;
            UserInfoManager.upDateSimpleInfo(MainManager.actorInfo,function():void
            {
               UserInfoManager.upDateMoreInfo(MainManager.actorInfo,function():void
               {
               });
            });
         });
      }
   }
}
