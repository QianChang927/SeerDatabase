package com.robot.app2.mapProcess
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.task.taskUtils.manage.TaskDiaLogManager;
   import com.robot.app.task.taskUtils.taskDialog.TaskMod;
   import com.robot.app2.systems.mapObject.MapObjectControl;
   import com.robot.core.BitBuffSetClass;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapListenerManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.utils.BitUtils;
   import flash.display.MovieClip;
   import flash.events.MouseEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class MapProcess_11324 extends BaseMapProcess
   {
       
      
      private var _statusVal:int;
      
      private var _winCount:int;
      
      private var _taskMc:MovieClip;
      
      private const petHeadIds:Array = [NPC.LONS,NPC.SIJIALI,NPC.COLT,NPC.FRIDER,NPC.FALLS,NPC.QIAOTELUDE,NPC.MISIDIKE,NPC.CANGLAN,NPC.MARHUGES];
      
      public function MapProcess_11324()
      {
         super();
      }
      
      override protected function init() : void
      {
         this.upData();
         this.loadMc();
      }
      
      private function upData(param1:Function = null) : void
      {
         var fun:Function = param1;
         KTool.getMultiValue([4382],function(param1:Array):void
         {
            _statusVal = param1[0];
            _winCount = 0;
            var _loc2_:int = 0;
            while(_loc2_ < 9)
            {
               _winCount += BitUtils.getBit(_statusVal,_loc2_);
               _loc2_++;
            }
            if(fun != null)
            {
               fun();
            }
         });
      }
      
      private function onClick(param1:MouseEvent) : void
      {
         var index:int = 0;
         var e:MouseEvent = param1;
         if(e.target.name.indexOf("petBtn") < 0)
         {
            return;
         }
         index = int(e.target.name.split("_")[1]);
         if(this._winCount >= 5)
         {
            this.overTask(index);
            return;
         }
         if(BitUtils.getBit(this._statusVal,index) == 0)
         {
            NpcDialog.show(this.petHeadIds[index],["来吧，让我们看看你这个暑假训练的成果！再击败我们中的" + (5 - this._winCount) + "位，你就能通过考验了！"],["我要挑战你！","看我用钻石砸晕你！","让我再准备一下。"],[function():void
            {
               FightManager.fightNoMapBoss("",7813 + index);
               FightDispatcher.addEventListener(PetFightEvent.ALARM_CLICK,function(param1:PetFightEvent):void
               {
                  var e:PetFightEvent = param1;
                  FightDispatcher.removeEventListener(PetFightEvent.ALARM_CLICK,arguments.callee);
                  upData(function():void
                  {
                     checkTaskStatus(index);
                  });
               });
            },function():void
            {
               KTool.buyProductByCallback(248512,1,function():void
               {
                  SocketConnection.sendWithCallback(46240,function():void
                  {
                     upData(function():void
                     {
                        checkTaskStatus(index);
                     });
                  },5,1 + index);
               });
            }]);
         }
         else
         {
            NpcDialog.show(this.petHeadIds[index],["果然英雄出少年！"],["过奖过奖！"]);
         }
      }
      
      private function overTask(param1:uint) : void
      {
         var index:uint = param1;
         NpcDialog.show(this.petHeadIds[index],["果然英雄出少年！看来这个暑假你并没有荒废。快去向罗杰船长报告吧！"],["谢谢各位！"],[function():void
         {
            KTool.changeMapWithCallBack(1,function():void
            {
               ModuleManager.showAppModule("CelebrationOpeningMainPanel");
            });
         }]);
      }
      
      private function checkTaskStatus(param1:uint) : void
      {
         var index:uint = param1;
         if(BitUtils.getBit(this._statusVal,index) > 0)
         {
            NpcDialog.show(this.petHeadIds[index],["果然英雄出少年！"],["过奖过奖！"],[function():void
            {
               if(_winCount >= 5)
               {
                  overTask(index);
               }
            }]);
         }
      }
      
      private function loadMc() : void
      {
         ResourceManager.getResource(ClientConfig.getMapAnimate("CelebrationOpeningAnmiate"),function(param1:MovieClip):void
         {
            _taskMc = param1;
            conLevel.addChild(_taskMc);
            if(!BitBuffSetClass.getState(23246))
            {
               StatManager.sendStat2014("0826开学庆典大动员","触发精灵王场景动画","2016运营活动");
               playPreStory();
            }
            else
            {
               initMap();
            }
         });
      }
      
      private function initMap() : void
      {
         this._taskMc.gotoAndStop(2);
         this._taskMc.mc.gotoAndStop(this._taskMc.mc.totalFrames);
         var _loc1_:int = 0;
         while(_loc1_ < 9)
         {
            MapListenerManager.add(this._taskMc.mc["petBtn_" + _loc1_],this.onClick);
            _loc1_++;
         }
      }
      
      private function playPreStory() : void
      {
         KTool.hideMapAllPlayerAndMonster();
         MapObjectControl.hideOrShowAllObjects(false);
         LevelManager.iconLevel.visible = false;
         TaskDiaLogManager.single.playStory(this.getStroy(),function():void
         {
            BitBuffSetClass.setState(23246,1);
            KTool.showMapAllPlayerAndMonster();
            MapObjectControl.hideOrShowAllObjects(true);
            LevelManager.iconLevel.visible = true;
            initMap();
         });
      }
      
      private function getStroy() : Array
      {
         var _loc1_:Array = [];
         _loc1_.push(new TaskMod(TaskDiaLogManager.MAP_MOVIE,0,null,null,[this._taskMc,2,"mc"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LONS,["你好，小赛尔。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["你好，艾恩斯大人！各位精灵王大人们好！我来这里，想提出一个请求……"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LONS,["哦？你说。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["就在下周，赛尔号将举行一场开学庆典。我代表赛尔号中的全体赛尔，衷心希望各位大人能够出席参与这次的庆典盛会！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LONS,["开学庆典，那可真是一场盛事啊！广大的小赛尔们不仅能在暑期增强自己的战斗能力，在开学后还能丰富知识，成为一个智慧的人。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.LONS,["你可以告诉罗杰船长，我们非常乐意参与这次开学庆典。届时我们必将出席。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["谢谢各位，开学庆典能得到你们的捧场，这是赛尔号的荣幸！我这就回去告诉罗杰船长，他一定也很开心！"],["别急，小赛尔。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.FRIDER,["这一整个暑假都要结束了，不知道你们在开心玩乐的同时，有没有继续提升自己的实力？大暗黑天步步紧逼，我们绝对不能懈怠。"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["当然了！我可是天天努力培养精灵，还在巅峰圣战磨练技巧的！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.FRIDER,["口说无凭。这样吧，小赛尔，你就作为赛尔号其他赛尔的代表，我来考验考验你，如何？"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.SEER,["没问题，来吧，正好让你看看，我这个暑假训练的成果！"]));
         _loc1_.push(new TaskMod(TaskDiaLogManager.DIALOG,NPC.FRIDER,["好！你看我们这里有九种系别的精灵王，你只要能0xff0000击败我们之中的任意5只精灵王，就算你通过考验0xffffff，怎么样？"],["小意思，看我的！"]));
         return _loc1_;
      }
      
      override public function destroy() : void
      {
         DisplayUtil.removeForParent(this._taskMc);
         this._taskMc = null;
         super.destroy();
      }
   }
}
