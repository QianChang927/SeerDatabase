package com.robot.app.cmd
{
   import com.robot.app.control.Broadcast2016Controller;
   import com.robot.app.control.BroadcastController;
   import com.robot.app.task.taskUtils.taskDialog.NpcTipDialog;
   import com.robot.core.CommandID;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.info.BroadcastInfo;
   import com.robot.core.info.SystemMsgInfo;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.TaskIconManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import flash.display.SimpleButton;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.net.SharedObject;
   import flash.utils.ByteArray;
   import org.taomee.bean.BeanEvent;
   import org.taomee.bean.BeanManager;
   import org.taomee.events.SocketEvent;
   
   public class SysMsgCmdListener
   {
      
      public static var npcLink:Array = ["",NpcTipDialog.SHIPER,NpcTipDialog.CICI,NpcTipDialog.DOCTOR,NpcTipDialog.IRIS,NpcTipDialog.JUSTIN,NpcTipDialog.NONO,NpcTipDialog.SHAWN,NpcTipDialog.ROCKY,NpcTipDialog.LANNI,NpcTipDialog.MILUBOSS,NpcTipDialog.TERRY];
      
      public static var npcName:Array = ["米饭基地","船长罗杰","机械师茜茜","博士派特","导航员爱丽丝","站长贾斯汀","NONO","发明家肖恩","罗开","兰妮","米鲁族长","特瑞院长","","","","","","","","","淘米校巴"];
      
      private static var _owner:com.robot.app.cmd.SysMsgCmdListener;
       
      
      private var _icon:SimpleButton;
      
      private var _msgArray:Array;
      
      private var _isBeanOver:Boolean = false;
      
      public function SysMsgCmdListener()
      {
         this._msgArray = [];
         super();
      }
      
      public static function getInstance() : com.robot.app.cmd.SysMsgCmdListener
      {
         if(_owner == null)
         {
            _owner = new com.robot.app.cmd.SysMsgCmdListener();
         }
         return _owner;
      }
      
      public function addInfo(param1:SystemMsgInfo) : void
      {
         this._msgArray.push(param1);
         this.checkLength();
      }
      
      public function start() : void
      {
         BeanManager.addEventListener(BeanEvent.COMPLETE,this.onBeanOver);
         SocketConnection.addCmdListener(CommandID.SYSTEM_MESSAGE,this.onSystemMsg);
         SocketConnection.addCmdListener(CommandID.LVHUO_TONGZHI,this.onLvhuo);
      }
      
      private function onLvhuo(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         _loc2_.position = 0;
         var _loc3_:BroadcastInfo = new BroadcastInfo();
         _loc3_.nick = _loc2_.readUTFBytes(16);
         if(_loc2_.readUnsignedInt() == 5)
         {
            _loc3_.type = 255;
            BroadcastController.addBroadcast(_loc3_,true);
         }
      }
      
      private function onBeanOver(param1:Event) : void
      {
         this._isBeanOver = true;
         BeanManager.removeEventListener(BeanEvent.COMPLETE,this.onBeanOver);
         this.checkLength();
      }
      
      private function onSystemMsg(param1:SocketEvent) : void
      {
         var _loc2_:SystemMsgInfo = param1.data as SystemMsgInfo;
         if(_loc2_.npc == 99)
         {
            if(_loc2_.broadcast2016.id >= 270)
            {
               _loc2_.broadcast2016.id -= 270 - 1;
               Broadcast2016Controller.addBroadcast(_loc2_.broadcast2016,true);
            }
         }
         else if(_loc2_.npc < 100000)
         {
            this._msgArray.push(_loc2_);
            this.checkLength();
         }
      }
      
      private function checkLength() : void
      {
         if(this._isBeanOver == false)
         {
            return;
         }
         if(this._msgArray.length > 0)
         {
         }
         this._msgArray.sortOn("msgPriority",Array.NUMERIC | Array.DESCENDING);
      }
      
      private function showSysMsg(param1:MouseEvent) : void
      {
         var info:SystemMsgInfo = null;
         var so:SharedObject = null;
         var event:MouseEvent = param1;
         StatManager.sendPetStat(84807310,30);
         StatManager.sendTodayRegStat(86064442);
         StatManager.sendPetStat(86064455);
         info = this._msgArray.shift() as SystemMsgInfo;
         if(info.des != null && info.des.length > 0)
         {
            StatManager.sendStat2014("小信封",info.des,"打开小信封");
         }
         else
         {
            StatManager.sendStat2014("小信封",info.moduleName,"打开小信封");
         }
         if(info.moduleName != null && info.moduleName != "")
         {
            if(info.buffer != 0)
            {
               BufferRecordManager.setState(MainManager.actorInfo,info.buffer,true,function():void
               {
                  showModule(info);
               });
            }
            else if(info.isUseSO == true)
            {
               so = SOManager.getUserSO(SOManager.LOCALMSG);
               so.data[info.moduleName] = true;
               SOManager.flush(so);
               this.showModule(info);
            }
            else
            {
               this.showModule(info);
            }
            this.checkLength();
            return;
         }
         if(info.npc >= 100000)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("OfflineMsgPanel_Pet"),"正在打开消息面板....",info);
         }
         else if(info.npc >= 100)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("customMsg/CustomMsg_" + info.npc),"正在打开消息面板....");
         }
         else if(info.npc == 99)
         {
            BroadcastController.addBroadcast(info.broadcast,true);
         }
         else
         {
            ModuleManager.showModule(ClientConfig.getAppModule("OfflineMsgPanel"),"正在打开消息面板....",info);
         }
         this.checkLength();
      }
      
      private function showModule(param1:SystemMsgInfo) : void
      {
         if(param1.isSimple)
         {
            ModuleManager.showModule(ClientConfig.getAppModule("SimpleEnvelopePanel"),"正在打开消息面板....",param1);
         }
         else
         {
            switch(param1.moduleType)
            {
               case "festival":
                  ModuleManager.showModule(ClientConfig.getFestivalModule(param1.moduleName),"正在打开消息面板....",param1.moduleParam);
                  break;
               case "book":
                  ModuleManager.showModule(ClientConfig.getBookModule(param1.moduleName),"正在打开消息面板....",param1.moduleParam);
                  break;
               case "map":
                  ModuleManager.showModule(ClientConfig.getMapModule(param1.moduleName),"正在打开消息面板....",param1.moduleParam);
                  break;
               case "help":
                  ModuleManager.showModule(ClientConfig.getHelpModule(param1.moduleName),"正在打开消息面板....",param1.moduleParam);
                  break;
               case "game":
                  ModuleManager.showModule(ClientConfig.getGameModule(param1.moduleName),"正在打开消息面板....",param1.moduleParam);
                  break;
               case "task":
                  ModuleManager.showModule(ClientConfig.getTaskModule(param1.moduleName),"正在打开消息面板....",param1.moduleParam);
                  break;
               case "fight":
                  ModuleManager.showModule(ClientConfig.getFightModule(param1.moduleName),"正在打开消息面板....",param1.moduleParam);
                  break;
               default:
                  ModuleManager.showModule(ClientConfig.getAppModule(param1.moduleName),"正在打开消息面板....",param1.moduleParam);
            }
         }
      }
      
      private function showIcon() : void
      {
         if(this._icon == null)
         {
            this._icon = UIManager.getButton("System_Msg_Icon");
            this._icon.addEventListener(MouseEvent.CLICK,this.showSysMsg);
            TaskIconManager.addIcon(this._icon,TaskIconManager.LEFT,10);
         }
      }
      
      private function hideIcon() : void
      {
         if(this._icon != null)
         {
            TaskIconManager.delIcon(this._icon);
            this._icon.removeEventListener(MouseEvent.CLICK,this.showSysMsg);
            this._icon = null;
         }
      }
   }
}
