package com.robot.app.mapProcess
{
   import com.robot.app.panel.TopSelectPanel;
   import com.robot.app.sys.SysSOManager;
   import com.robot.core.CommandID;
   import com.robot.core.animate.AnimateManager;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.manager.BufferRecordManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.mode.AppModel;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.npc.NPC;
   import com.robot.core.npc.NpcDialog;
   import com.robot.core.ui.alert.SimpleAlarm;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ToolTipManager;
   
   public class MapProcess_433 extends BaseMapProcess
   {
       
      
      private var _jxgNPC:MovieClip;
      
      private var _ListWarBtn:MovieClip;
      
      private var _ToWarBtn:MovieClip;
      
      private var _ToWarBtnBeyond:MovieClip;
      
      private var _bookMC:MovieClip;
      
      private var _isPlay:Boolean = false;
      
      private var _mode:uint;
      
      private var _panel:AppModel;
      
      public function MapProcess_433()
      {
         super();
      }
      
      override protected function init() : void
      {
         var first:Boolean;
         this._jxgNPC = this.depthLevel["jxgNPC"];
         this._jxgNPC.buttonMode = true;
         this._jxgNPC.addEventListener(MouseEvent.CLICK,this.onJHandler);
         this._jxgNPC.visible = false;
         this._ListWarBtn = this.conLevel["ListPetTopLevelWarBtn"];
         this._ListWarBtn.buttonMode = true;
         this._ListWarBtn.addEventListener(MouseEvent.CLICK,this.onListWarHandler);
         ToolTipManager.add(this._ListWarBtn,"巅峰之战第十二季");
         this._ToWarBtn = this.conLevel["ToTopLevelWarMC"];
         this._ToWarBtn.buttonMode = true;
         this._ToWarBtn.addEventListener(MouseEvent.CLICK,this.onToWarBtnHandler);
         this._ToWarBtn.addEventListener(MouseEvent.ROLL_OVER,this.onBtnOverHandler);
         this._ToWarBtn.addEventListener(MouseEvent.ROLL_OUT,this.onBtnOutHandler);
         ToolTipManager.add(this._ToWarBtn,"巅峰之战积分赛");
         this._ToWarBtnBeyond = this.conLevel["ToTopLevelWarMC_beyond"];
         this._ToWarBtnBeyond.buttonMode = true;
         this._ToWarBtnBeyond.addEventListener(MouseEvent.CLICK,this.onToWarBtnHandler);
         this._ToWarBtnBeyond.addEventListener(MouseEvent.ROLL_OVER,this.onBtnOverHandler);
         this._ToWarBtnBeyond.addEventListener(MouseEvent.ROLL_OUT,this.onBtnOutHandler);
         ToolTipManager.add(this._ToWarBtnBeyond,"巅峰之战积分赛：\r突破模式");
         this._bookMC = topLevel["bookMC"];
         this._bookMC.addEventListener(MouseEvent.CLICK,this.onShowWarPanel);
         ToolTipManager.add(this._bookMC,"巅峰之战物品兑换手册");
         this._bookMC.visible = false;
         SysSOManager.freshLastSys(12003);
         SocketConnection.send(1022,86053861);
         first = MainManager.actorInfo.topWinCount + MainManager.actorInfo.topLossCount + MainManager.actorInfo.top_Two_Win + MainManager.actorInfo.top_Two_Lose + MainManager.actorInfo.top_Tree_Win + MainManager.actorInfo.top_Tree_Lose + MainManager.actorInfo.top_Four_Win + MainManager.actorInfo.top_Four_Lose + MainManager.actorInfo.top_Five_Win + MainManager.actorInfo.top_Five_Lose + MainManager.actorInfo.top_Six_Win + MainManager.actorInfo.top_Six_Lose + MainManager.actorInfo.top_Seven_Win + MainManager.actorInfo.top_Seven_Lose + MainManager.actorInfo.top_Eight_Win + MainManager.actorInfo.top_Eight_Lose + MainManager.actorInfo.top_Nine_Win + MainManager.actorInfo.top_Nine_Lose == 0;
         if(!BufferRecordManager.getMyState(623) && first)
         {
            AnimateManager.playFullScreenAnimate(ClientConfig.getFullMovie("topfightPreMovie"),function():void
            {
               BufferRecordManager.setMyState(623,true);
               NpcDialog.show(NPC.JUNXUGUAN,["哈哈，" + MainManager.actorInfo.formatNick + "很高兴能在这里看到你。你果然是具备成为最强精灵训练师潜质的赛尔！"],null,null,false,function():void
               {
                  NpcDialog.show(NPC.JUNXUGUAN,["这里是0xff0000最顶级的战场0xffffff—巅峰之战！只有真正顶级的精灵训练师才有资格参加。"],["巅峰之战？具体是怎么样的呢？"],[function():void
                  {
                     NpcDialog.show(NPC.JUNXUGUAN,["只有100级的精灵才能在这里出战！你将在这里找到最合适的对手，如果获胜还能获得0xff0000巅峰荣誉0xffffff奖励哦！"],["巅峰荣誉有什么用？"],[function():void
                     {
                        NpcDialog.show(NPC.JUNXUGUAN,["巅峰荣誉可以在0xff0000巅峰荣誉兑换手册0xffffff中进行兑换哦。许多0xff0000强力的精灵刻印0xffffff只有通过0xff0000巅峰荣誉0xffffff才可以获得。"],["精灵刻印有什么用？"],[function():void
                        {
                           NpcDialog.show(NPC.JUNXUGUAN,["精灵刻印可以0xff0000强化精灵的技能和能力0xffffff，让精灵变得更强。真正强大的精灵训练师，都会给自己的精灵装配合适的刻印。"],["我一定会加油的！我要成为最强的精灵训练师！"],[function():void
                           {
                              NpcDialog.show(NPC.JUNXUGUAN,["我相信你一定可以的！这些巅峰荣誉，就作为你新加入的奖励赠送给你，期待你之后的卓越表现！"],null,null,false,function():void
                              {
                                 SocketConnection.send(CommandID.TOPFIGHT_GET_2000_AWARD);
                                 SimpleAlarm.show("恭喜你获得了2000点巅峰荣誉！");
                                 CommonUI.addYellowArrow(_bookMC,0,0,315);
                              });
                           }]);
                        }]);
                     }]);
                  }]);
               });
            });
         }
      }
      
      private function onJHandler(param1:Event) : void
      {
         var e:Event = param1;
         if(MainManager.actorInfo.topStatus10 == 1)
         {
            NpcDialog.show(NPC.JUNXUGUAN,["巅峰之战是验证实力和意志的舞台，相信你也感受到了！期待你在第十一赛季中有突出的表现！收下你的奖励，向着更高更远的目标前进！"],["我会努力的！"],[function():void
            {
               SocketConnection.addCmdListener(CommandID.TOPFIGHT_GET_AWARD,function(param1:SocketEvent):void
               {
                  SocketConnection.removeCmdListener(CommandID.TOPFIGHT_GET_AWARD,arguments.callee);
                  MainManager.actorInfo.topStatus10 = 0;
               });
               SocketConnection.send(CommandID.TOPFIGHT_GET_AWARD,10);
            }]);
         }
         else if(MainManager.actorInfo.topStatus10 == 2)
         {
            NpcDialog.show(NPC.JUNXUGUAN,["在巅峰之战第十赛季中，你表现出了惊人的实力和坚忍不拔的意志，这是属于你的奖励！希望你能在新赛季中能取得更大的突破！"],["恩！我一定会加油的！"],[function():void
            {
               SocketConnection.addCmdListener(CommandID.TOPFIGHT_GET_AWARD,function(param1:SocketEvent):void
               {
                  SocketConnection.removeCmdListener(CommandID.TOPFIGHT_GET_AWARD,arguments.callee);
                  MainManager.actorInfo.topStatus10 = 0;
               });
               SocketConnection.send(CommandID.TOPFIGHT_GET_AWARD,10);
            }]);
         }
         else
         {
            NpcDialog.show(NPC.JUNXUGUAN,["你要做什么？"],["我要用荣誉点数兑换东西！","我要参加巅峰之战！","我要查看自己的对战情况！","没什么事，我来看看……"],[function():void
            {
               NpcDialog.show(NPC.JUNXUGUAN,["需要兑换物品的话，打开右下角的巅峰之战物品兑换手册，就可以兑换了哦！"],["我知道咯！"]);
            },function():void
            {
               NpcDialog.show(NPC.JUNXUGUAN,["看到我边上的传送台了吗？去那边报名参战吧！"],["我知道咯！"]);
            },function():void
            {
               NpcDialog.show(NPC.JUNXUGUAN,["在你的个人面板中会显示出你的个人战绩哦！"],["我知道咯！"]);
            }]);
         }
      }
      
      private function onListWarHandler(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("LeagueNoticePanel"));
      }
      
      private function onBtnOverHandler(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         _loc2_.gotoAndStop(2);
      }
      
      private function onBtnOutHandler(param1:MouseEvent) : void
      {
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         _loc2_.gotoAndStop(1);
      }
      
      private function onShowWarPanel(param1:MouseEvent) : void
      {
         CommonUI.removeYellowArrow(this._bookMC);
         ModuleManager.showModule(ClientConfig.getAppModule("FightExchangePanel"));
      }
      
      private function onToWarBtnHandler(param1:MouseEvent) : void
      {
         this._isPlay = false;
         var _loc2_:MovieClip = param1.currentTarget as MovieClip;
         if(_loc2_ == this._ToWarBtn)
         {
            this._mode = TopSelectPanel.NORMAL;
         }
         else
         {
            this._mode = TopSelectPanel.BEYOND;
         }
         this.showTopSelectPanel();
      }
      
      public function onPointClick(param1:MovieClip) : void
      {
         this._isPlay = true;
         var _loc2_:uint = uint(param1.name.split("_")[1]) % 2;
         if(_loc2_ == 0)
         {
            this._mode = TopSelectPanel.NORMAL;
         }
         else
         {
            this._mode = TopSelectPanel.BEYOND;
         }
         this.showTopSelectPanel();
      }
      
      private function showTopSelectPanel() : void
      {
         TopSelectPanel.show(function():void
         {
            TopSelectPanel.mode = _mode;
            TopSelectPanel.isPlay = _isPlay;
         });
      }
      
      override public function destroy() : void
      {
         this._jxgNPC.removeEventListener(MouseEvent.CLICK,this.onJHandler);
         ToolTipManager.remove(this._ListWarBtn);
         this._ListWarBtn.removeEventListener(MouseEvent.CLICK,this.onListWarHandler);
         ToolTipManager.remove(this._ToWarBtn);
         this._ToWarBtn.removeEventListener(MouseEvent.CLICK,this.onToWarBtnHandler);
         this._ToWarBtn.removeEventListener(MouseEvent.ROLL_OVER,this.onBtnOverHandler);
         this._ToWarBtn.removeEventListener(MouseEvent.ROLL_OUT,this.onBtnOutHandler);
         ToolTipManager.remove(this._ToWarBtnBeyond);
         this._ToWarBtnBeyond.removeEventListener(MouseEvent.CLICK,this.onToWarBtnHandler);
         this._ToWarBtnBeyond.removeEventListener(MouseEvent.ROLL_OVER,this.onBtnOverHandler);
         this._ToWarBtnBeyond.removeEventListener(MouseEvent.ROLL_OUT,this.onBtnOutHandler);
         ToolTipManager.remove(this._bookMC);
         this._bookMC.removeEventListener(MouseEvent.CLICK,this.onShowWarPanel);
         if(this._panel)
         {
            this._panel.destroy();
            this._panel = null;
         }
         TopSelectPanel.destroy();
         this._ToWarBtn = null;
         this._ToWarBtnBeyond = null;
         this._jxgNPC = null;
      }
   }
}
