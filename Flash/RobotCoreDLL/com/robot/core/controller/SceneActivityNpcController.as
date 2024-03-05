package com.robot.core.controller
{
   import com.robot.core.config.xml.MapXMLInfo;
   import com.robot.core.config.xml.NpcXMLInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.mode.INpcModel;
   import com.robot.core.mode.NpcModel;
   import com.robot.core.mode.SceneActivityNpcModel;
   import com.robot.core.mode.SimpleNpcModel;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.npc.NpcInfo;
   import flash.events.MouseEvent;
   
   public class SceneActivityNpcController
   {
      
      private static var _npc;
      
      private static var npcinfo:Array;
      
      private static var start:Date;
      
      private static var end:Date;
       
      
      public function SceneActivityNpcController()
      {
         super();
      }
      
      public static function init() : void
      {
         var pinfo:SceneActivityNpcModel = null;
         var npc:INpcModel = null;
         npcinfo = MapXMLInfo.getSceneNpcById(MainManager.actorInfo.mapID);
         if(npcinfo.length)
         {
            if(parseInt(npcinfo[1]) == 1)
            {
               pinfo = new SceneActivityNpcModel(parseInt(npcinfo[0]));
               pinfo.show();
               pinfo.setMark(1);
               _npc = pinfo;
            }
            else
            {
               NpcXMLInfo.getNpcXml(parseInt(npcinfo[0]),function(param1:XML):void
               {
                  var _loc2_:NpcInfo = new NpcInfo(param1);
                  if(_loc2_.isSimple)
                  {
                     npc = new SimpleNpcModel(_loc2_,true);
                  }
                  else
                  {
                     npc = new NpcModel(_loc2_,true);
                  }
                  npc.show();
                  npc.setMark(1);
                  _npc = npc;
                  setnpc();
               });
            }
            if(_npc)
            {
               setnpc();
            }
         }
      }
      
      private static function setnpc() : void
      {
         _npc.x = parseInt(npcinfo[2]);
         _npc.y = parseInt(npcinfo[3]);
         _npc.addEventListener(MouseEvent.CLICK,clickHandle);
         if(npcinfo[4] != "*")
         {
            start = SystemTimerManager.get0DateByStr(npcinfo[4]);
         }
         else
         {
            start = null;
         }
         if(npcinfo[5] != "*")
         {
            end = SystemTimerManager.get0DateByStr(npcinfo[5]);
         }
         else
         {
            end = null;
         }
         if(start)
         {
            if(SystemTimerManager.sysBJDate.time < start.time)
            {
               destroy();
            }
         }
      }
      
      public static function shownpc(param1:Boolean) : void
      {
         if(_npc)
         {
            _npc.visible = param1;
         }
      }
      
      public static function getnpcStarttime() : Date
      {
         return start;
      }
      
      private static function clickHandle(param1:MouseEvent) : void
      {
         var type:int = 0;
         var timestr:String = null;
         var timedate:Date = null;
         var timestrshow:String = null;
         var e:MouseEvent = param1;
         if(end)
         {
            if(SystemTimerManager.sysBJDate.time < end.time)
            {
               type = 1;
            }
         }
         else if(SystemTimerManager.sysBJDate.time >= start.time)
         {
            type = 1;
         }
         StatManager.sendStat2014("NPC监控",MainManager.actorInfo.mapID + "点击NPC","推送机制重做");
         if(type == 1)
         {
            timestr = String(npcinfo[4]);
            timedate = SystemTimerManager.get0DateByStr(timestr);
            timestrshow = timedate.fullYear + "年" + (timedate.month + 1) + "月" + timedate.date + "日";
            NpcDialog.show(parseInt(npcinfo[0]),["你好，" + MainManager.actorInfo.nick + "。[" + timestrshow + "]以来，又有许多事情发生。你想知道什么？"],["我想了解最新发生的事件！","这里发生过什么？","我还有点事，待会再聊。"],[function():void
            {
               StatManager.sendStat2014("NPC监控",MainManager.actorInfo.mapID + "选择最新发生事件","推送机制重做");
               ModuleManager.showAppModule("SceneActivityPanel");
            },function():void
            {
               StatManager.sendStat2014("NPC监控",MainManager.actorInfo.mapID + "选择这里发生了什么","推送机制重做");
               var _loc1_:* = NewSceneActivityController.getinstance().getactivitysByType(-1,0,-1,MainManager.actorInfo.mapID).concat(NewSceneActivityController.getinstance().getactivitysByType(-1,2,-1,MainManager.actorInfo.mapID));
               if(_loc1_.length)
               {
                  ModuleManager.showAppModule("SceneActivityBasePanel",{"arr":_loc1_});
               }
            },null],false,null,true,parseInt(npcinfo[1]) == 0);
         }
         else
         {
            NpcDialog.show(parseInt(npcinfo[0]),["你好，" + MainManager.actorInfo.nick + "。"],["我想获得一些经典精灵！","我想了解最新发生的事件！","这里发生了什么？","我还有点事，待会再聊。"],[function():void
            {
               StatManager.sendStat2014("NPC监控",MainManager.actorInfo.mapID + "选择获得经典精灵","推送机制重做");
               var _loc1_:* = NewSceneActivityController.getinstance().getactivitysByType(-1,0,1);
               ModuleManager.showAppModule("SceneActivityClassicalPanel",{
                  "arr":_loc1_,
                  "isclassical":1
               });
            },function():void
            {
               StatManager.sendStat2014("NPC监控",MainManager.actorInfo.mapID + "选择最新发生事件","推送机制重做");
               ModuleManager.showAppModule("SceneActivityPanel");
            },function():void
            {
               StatManager.sendStat2014("NPC监控",MainManager.actorInfo.mapID + "选择这里发生了什么","推送机制重做");
               var _loc1_:* = NewSceneActivityController.getinstance().getactivitysByType(-1,0,-1,MainManager.actorInfo.mapID).concat(NewSceneActivityController.getinstance().getactivitysByType(-1,2,-1,MainManager.actorInfo.mapID));
               if(_loc1_.length)
               {
                  ModuleManager.showAppModule("SceneActivityBasePanel",{"arr":_loc1_});
               }
            },null],false,null,true,parseInt(npcinfo[1]) == 0);
         }
      }
      
      public static function destroy() : void
      {
         if(_npc)
         {
            _npc.removeEventListener(MouseEvent.CLICK,clickHandle);
            _npc.destroy();
            _npc = null;
         }
         _npc = null;
      }
   }
}
