package com.robot.app.mapProcess.control
{
   import com.robot.app.cmd.SysMsgCmdListener;
   import com.robot.core.CommandID;
   import com.robot.core.aimat.AimatController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.AimatEvent;
   import com.robot.core.info.SystemMsgInfo;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SOManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.Alarm;
   import com.robot.core.ui.alert.Answer;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.net.SharedObject;
   import flash.utils.ByteArray;
   import org.taomee.events.SocketEvent;
   
   public class CrackSpaceController
   {
      
      private static var _map:BaseMapProcess;
      
      private static const POST_X:Array = [205,745,475];
       
      
      public function CrackSpaceController()
      {
         super();
      }
      
      public static function setup() : void
      {
         var _loc4_:SystemMsgInfo = null;
         var _loc1_:SharedObject = SOManager.getUserSO(SOManager.ACTIVITY);
         var _loc2_:Date = new Date();
         var _loc3_:String = _loc2_.fullYear.toString() + _loc2_.month.toString() + _loc2_.date.toString();
         if(_loc1_.data["crackSpace"] == undefined || _loc1_.data["crackSpace"] != _loc3_)
         {
            (_loc4_ = new SystemMsgInfo()).moduleName = "CrackSpaceAdPanel";
            SysMsgCmdListener.getInstance().addInfo(_loc4_);
         }
         AimatController.addEventListener(AimatEvent.PLAY_END,onAimatEnd);
      }
      
      private static function onAimatEnd(param1:AimatEvent) : void
      {
         if(param1.info.userID == MainManager.actorInfo.userID && param1.info.id >= 600043 && param1.info.id <= 600045)
         {
            SocketConnection.send(CommandID.CRACKSPACE_AIMAT);
         }
      }
      
      public static function init(param1:BaseMapProcess) : void
      {
         _map = param1;
         _map.conLevel["npc"].addEventListener(MouseEvent.CLICK,onNpc);
      }
      
      private static function onNpc(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         NpcDialog.show(NPC.DAIDAI,["哈哈，" + MainManager.actorInfo.formatNick + "，精灵王争霸赛实在是太火爆了！你的队伍成绩怎么样呀？冠军队伍就能领取给力的冠军奖品哦！"],["那其它实力强大的选手呢？"],[function():void
         {
            NpcDialog.show(NPC.DAIDAI,["非冠军队伍的选手，总积分达到700以上同样可以获得冠军奖励哦！好好表现吧，袋袋为你加油！"],["哇，我这就去战斗，我要让你成为我的伙伴！"],[function():void
            {
               ModuleManager.showModule(ClientConfig.getAppModule("CrackSchedule"),"正在打开...");
            }]);
         }]);
      }
      
      private static function onSignIn(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.CRACKSPACE_QUERY_SIGNIN,onSignIn);
         var _loc2_:uint = (param1.data as ByteArray).readUnsignedInt();
         if(_loc2_ % 5 == 0)
         {
            return;
         }
         var _loc3_:* = "这是你第" + _loc2_ % 5 + "次签到，累计签到5次将获得乔安娜的精元、小型升级秘药、10万经验券。";
         Alarm.show(_loc3_);
      }
      
      private static function cheerFun() : void
      {
         if(MainManager.actorInfo.crackCupTeamId == 0)
         {
            NpcDialog.show(NPC.DAIDAI,["啊，你还没有队伍呢，先去加入队伍然后再来为你的队伍加油吧！"],["我要去加入队伍！","我只是路过而已！"],[function():void
            {
               MapManager.addAppArrowListener(332,238,279,40);
               MapManager.changeMap(332);
            },null]);
            return;
         }
         if(MainManager.actorInfo.dailyResArr[250] < 3)
         {
            MapManager.currentMap.spaceLevel.addEventListener(MouseEvent.MOUSE_DOWN,onMouseDown);
            MainManager.actorModel.x = POST_X[MainManager.actorInfo.crackCupTeamId - 1];
            MainManager.actorModel.y = 318;
            _map.conLevel["crackSpace"].addEventListener(Event.ENTER_FRAME,onEnterFrame);
            _map.conLevel["crackSpace"].gotoAndPlay(2);
         }
         else
         {
            Alarm.show("今天加油次数已经很多了请休息一下！");
         }
      }
      
      private static function onEnterFrame(param1:Event) : void
      {
         if((_map.conLevel["crackSpace"] as MovieClip).currentFrame == (_map.conLevel["crackSpace"] as MovieClip).totalFrames)
         {
            MapManager.currentMap.spaceLevel.removeEventListener(MouseEvent.MOUSE_DOWN,onMouseDown);
            _map.conLevel["crackSpace"].removeEventListener(Event.ENTER_FRAME,onEnterFrame);
            if((_map.conLevel["cheer_tab"] as MovieClip).hitTestPoint(MainManager.actorModel.x,MainManager.actorModel.y))
            {
               SocketConnection.addCmdListener(CommandID.CRACKSPACE_CHEER,onCheer);
               SocketConnection.send(CommandID.CRACKSPACE_CHEER);
               MainManager.actorModel.x = 480;
               MainManager.actorModel.y = 499;
            }
         }
      }
      
      private static function onMouseDown(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         if((_map.conLevel["cheer_tab"] as MovieClip).hitTestPoint(MapManager.currentMap.spaceLevel.mouseX,MapManager.currentMap.spaceLevel.mouseY) == false)
         {
            Answer.show("奏乐需要坚持1分钟，你确定离开么？",function():void
            {
               MapManager.currentMap.spaceLevel.removeEventListener(MouseEvent.MOUSE_DOWN,onMouseDown);
               if(_map)
               {
                  _map.conLevel["crackSpace"].removeEventListener(Event.ENTER_FRAME,onEnterFrame);
                  _map.conLevel["crackSpace"].gotoAndStop(1);
                  MainManager.actorModel.x = 480;
                  MainManager.actorModel.y = 499;
               }
            },null);
         }
      }
      
      private static function onCheer(param1:SocketEvent) : void
      {
         SocketConnection.removeCmdListener(CommandID.CRACKSPACE_CHEER,onCheer);
         MainManager.actorInfo.dailyResArr[250] = (param1.data as ByteArray).readUnsignedInt();
      }
      
      public static function destroy() : void
      {
         SocketConnection.removeCmdListener(CommandID.CRACKSPACE_QUERY_SIGNIN,onSignIn);
         SocketConnection.removeCmdListener(CommandID.CRACKSPACE_CHEER,onCheer);
         if(_map)
         {
            _map.conLevel["crackSpace"].removeEventListener(Event.ENTER_FRAME,onEnterFrame);
            MapManager.currentMap.spaceLevel.removeEventListener(MouseEvent.MOUSE_DOWN,onMouseDown);
            _map.conLevel["npc"].removeEventListener(MouseEvent.CLICK,onNpc);
            _map = null;
         }
      }
   }
}
