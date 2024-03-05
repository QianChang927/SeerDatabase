package com.robot.app2.mapProcess.control
{
   import com.robot.app.fight.FightManager;
   import com.robot.app.linkManager.LinkToUrlManager;
   import com.robot.app.petbag.PetBagControllerNew;
   import com.robot.app.task.petstory.util.EventListenerManager;
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app.toolBar.ToolBarController;
   import com.robot.core.config.ClientConfig;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.StatManager;
   import com.robot.core.manager.map.config.BaseMapProcess;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.utils.CommonUI;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.text.TextField;
   import flash.utils.setTimeout;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class ArmorUnionInwokeHideSkillController
   {
      
      private static var _map:BaseMapProcess;
      
      private static var _ui:MovieClip;
      
      private static var _eventListenerManager:EventListenerManager;
      
      private static var _vipDialog:MovieClip;
      
      private static var _vipResultDialog:MovieClip;
      
      private static var _resultDialog:MovieClip;
      
      private static var _completedResultDialog:MovieClip;
      
      private static var _exitDialog:MovieClip;
      
      private static var _dialogBg:Sprite;
      
      private static var _fightIndex:int = 0;
      
      private static var _hurtCount:int = 0;
      
      private static var _CurrHurtCount:int = 0;
       
      
      public function ArmorUnionInwokeHideSkillController()
      {
         super();
      }
      
      public static function initMap(param1:BaseMapProcess) : void
      {
         var map:BaseMapProcess = param1;
         ToolBarController.panel.visible = false;
         LevelManager.iconLevel.visible = false;
         LevelManager.toolsLevel.visible = false;
         _map = map;
         _eventListenerManager = new EventListenerManager();
         KTool.hideMapAllPlayerAndMonster();
         ResourceManager.getResource(ClientConfig.getAppRes("map_10579_0"),function(param1:MovieClip):void
         {
            _map.btnLevel.addChild(param1);
            _ui = param1;
            MovieClip(_ui["mcTitle"]).gotoAndStop(_fightIndex + 1);
            MovieClip(_ui["mcArmor"]).gotoAndStop(_fightIndex + 1);
            _vipDialog = _ui["mcVipDialog"];
            _vipResultDialog = _ui["mcVipResultDialog"];
            _resultDialog = _ui["mcResultDialog"];
            _completedResultDialog = _ui["mcCompletedResultDialog"];
            _exitDialog = _ui["mcExitDialog"];
            _dialogBg = _ui["mcDialogBg"];
            MovieClip(_ui["mcArmor"]).buttonMode = true;
            var _loc2_:int = 300;
            CommonUI.addYellowArrow(_ui,392,186,_loc2_);
            setTimeout(remvoeArrow,8000);
            DisplayUtil.removeForParent(_vipDialog,false);
            DisplayUtil.removeForParent(_vipResultDialog,false);
            DisplayUtil.removeForParent(_resultDialog,false);
            DisplayUtil.removeForParent(_completedResultDialog,false);
            DisplayUtil.removeForParent(_exitDialog,false);
            DisplayUtil.removeForParent(_dialogBg,false);
            addEvent();
            setStepShow();
            updateVipState();
            updateBuffData();
         });
      }
      
      private static function remvoeArrow() : void
      {
         if(_ui)
         {
            CommonUI.removeYellowArrow(_ui);
         }
      }
      
      public static function clickIcon(param1:*) : void
      {
         StatManager.sendStat2014("圣甲战神联盟签到送第五技能","点击Icon",StatManager.RUN_ACT);
         ModuleManager.showModule(ClientConfig.getAppModule("FifthSkillGiftPanel"));
      }
      
      private static function setStepShow() : void
      {
         var _loc1_:int = 0;
         while(_loc1_ < 4)
         {
            if(_fightIndex == _loc1_)
            {
               MovieClip(_ui["mcItem_" + _loc1_]).gotoAndStop(2);
            }
            else if(_loc1_ < _fightIndex)
            {
               MovieClip(_ui["mcItem_" + _loc1_]).gotoAndStop(1);
            }
            else
            {
               MovieClip(_ui["mcItem_" + _loc1_]).gotoAndStop(1);
               CommonUI.setEnabled(_ui["mcItem_" + _loc1_],false,true);
            }
            _loc1_++;
         }
      }
      
      private static function updateVipState() : void
      {
         if(MainManager.actorInfo.isVip)
         {
            MovieClip(_ui["mcVip"]).gotoAndStop(2);
         }
         else
         {
            MovieClip(_ui["mcVip"]).gotoAndStop(1);
         }
      }
      
      private static function updateBuffData() : void
      {
         KTool.getMultiValue([11511,11510],function(param1:Array):void
         {
            _hurtCount = param1[0];
            _CurrHurtCount = param1[1];
            var _loc2_:int = _hurtCount / 100;
            _loc2_ = _loc2_ > 150 ? 150 : _loc2_;
            MovieClip(_ui["mcBar"]).gotoAndStop(_loc2_ + 1);
            showFightResult();
            TextField(_ui["txtHurt"]).text = "已造成 " + _hurtCount + " 伤害";
         });
      }
      
      private static function getItemCount() : int
      {
         var _loc1_:int = 0;
         var _loc2_:Array = [1500,2700,4200,6000,7950,10050,12300,15000];
         var _loc3_:Array = [1,2,4,5,7,8,10,15];
         var _loc4_:int = 8;
         while(_loc4_ > 0)
         {
            if(_hurtCount >= _loc2_[_loc4_ - 1])
            {
               _loc1_ = int(_loc3_[_loc4_ - 1]);
               break;
            }
            _loc4_--;
         }
         return _loc1_;
      }
      
      private static function showFightResult() : void
      {
         if(_fightIndex > 0)
         {
            if(_fightIndex >= 4)
            {
               showCompletedResult();
            }
            else
            {
               showResult();
            }
         }
      }
      
      private static function showExitResult() : void
      {
         _ui.addChild(_dialogBg);
         _ui.addChild(_exitDialog);
         _exitDialog["txtHurt"].text = _hurtCount.toString();
         _exitDialog["txtItemCount"].text = getItemCount().toString();
      }
      
      private static function showCompletedResult() : void
      {
         _ui.addChild(_dialogBg);
         _ui.addChild(_completedResultDialog);
         _completedResultDialog["txtHurt"].text = _hurtCount.toString();
         _completedResultDialog["txtItemCount"].text = getItemCount().toString();
      }
      
      private static function showResult() : void
      {
         _ui.addChild(_dialogBg);
         if(MainManager.actorInfo.isVip)
         {
            _ui.addChild(_vipResultDialog);
            _vipResultDialog["txtCurrHurt"].text = _CurrHurtCount.toString();
            _vipResultDialog["txtVipHurt"].text = int(_CurrHurtCount * 1.2).toString();
         }
         else
         {
            _ui.addChild(_resultDialog);
            _resultDialog["txtCurrHurt"].text = _CurrHurtCount.toString();
            _resultDialog["txtVipHurt"].text = int(_CurrHurtCount * 1.2).toString();
         }
      }
      
      private static function addEvent() : void
      {
         _eventListenerManager.addEventListener(_ui["mcArmor"],MouseEvent.CLICK,onFightBoss);
         _eventListenerManager.addEventListener(_ui["mcVip"],MouseEvent.CLICK,onVip);
         _eventListenerManager.addEventListener(_ui["btnBag"],MouseEvent.CLICK,onClickBag);
         _eventListenerManager.addEventListener(_ui["btnCure"],MouseEvent.CLICK,onClickCure);
         _eventListenerManager.addEventListener(_ui["btnExit"],MouseEvent.CLICK,onClickExit);
         _eventListenerManager.addEventListener(_vipDialog["btnClose"],MouseEvent.CLICK,onClickCloseVipDialog);
         _eventListenerManager.addEventListener(_vipDialog["btnVip"],MouseEvent.CLICK,onOpenVip);
         _eventListenerManager.addEventListener(_vipDialog["btnMore"],MouseEvent.CLICK,onMoreVip);
         _eventListenerManager.addEventListener(_vipResultDialog,MouseEvent.CLICK,onClickDialog);
         _eventListenerManager.addEventListener(_resultDialog,MouseEvent.CLICK,onClickDialog);
         _eventListenerManager.addEventListener(_completedResultDialog,MouseEvent.CLICK,onClickDialog);
         _eventListenerManager.addEventListener(_exitDialog,MouseEvent.CLICK,onClickDialog);
      }
      
      private static function onClickExit(param1:MouseEvent) : void
      {
         showExitResult();
      }
      
      private static function onClickDialog(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         var mc:MovieClip = e.currentTarget as MovieClip;
         var targetName:String = String(e.target.name);
         if(targetName == "btnClose")
         {
            DisplayUtil.removeForParent(mc,false);
            DisplayUtil.removeForParent(_dialogBg,false);
         }
         else if(targetName == "btnVip")
         {
            DisplayUtil.removeForParent(mc,false);
            DisplayUtil.removeForParent(_dialogBg,false);
            onVip();
         }
         else if(targetName == "btnExit")
         {
            SocketConnection.sendWithCallback(41514,function(param1:SocketEvent):void
            {
               MapManager.addEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
               MapManager.changeMap(1016);
            });
         }
      }
      
      private static function onMapChange(param1:*) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_COMPLETE,onMapChange);
         ModuleManager.showModule(ClientConfig.getAppModule("FifthSkillGiftPanel"));
      }
      
      private static function onClickCloseVipDialog(param1:MouseEvent = null) : void
      {
         DisplayUtil.removeForParent(_vipDialog);
      }
      
      private static function onOpenVip(param1:MouseEvent) : void
      {
         var e:MouseEvent = param1;
         LinkToUrlManager.linkUrl(LinkToUrlManager.LINK_TYPE_4,"2",function():void
         {
            onClickCloseVipDialog();
            updateVipState();
            MainManager.actorInfo.mapID = 10579;
         });
      }
      
      private static function onMoreVip(param1:MouseEvent) : void
      {
         ModuleManager.showModule(ClientConfig.getAppModule("SeerVipPanel"));
      }
      
      private static function onVip(param1:MouseEvent = null) : void
      {
         _ui.addChild(_vipDialog);
      }
      
      private static function onClickBag(param1:MouseEvent) : void
      {
         PetBagControllerNew.showByBuffer();
      }
      
      private static function onClickCure(param1:MouseEvent) : void
      {
         PetManager.cureAll();
      }
      
      private static function onFightBoss(param1:MouseEvent) : void
      {
         var _loc2_:Array = [2071,2072,2073,2074];
         var _loc3_:Array = ["圣甲狂战","圣甲地裂","圣甲永夜","圣甲雷鸣"];
         FightManager.fightNoMapBoss(_loc3_[_fightIndex],_loc2_[_fightIndex]);
         ++_fightIndex;
      }
      
      public static function resetFight() : void
      {
         _fightIndex = 0;
      }
      
      public static function destroy() : void
      {
         KTool.showMapAllPlayerAndMonster();
         ToolBarController.panel.visible = true;
         LevelManager.iconLevel.visible = true;
         LevelManager.toolsLevel.visible = true;
         if(_eventListenerManager)
         {
            _eventListenerManager.clear();
            _eventListenerManager = null;
         }
         _map = null;
         _vipDialog = null;
         _vipResultDialog = null;
         _resultDialog = null;
         _completedResultDialog = null;
         _exitDialog = null;
         _dialogBg = null;
      }
   }
}
