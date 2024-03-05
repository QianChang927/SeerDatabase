package com.robot.app.automaticFight
{
   import com.robot.app.fight.FightManager;
   import com.robot.core.CommandID;
   import com.robot.core.dispatcher.FightDispatcher;
   import com.robot.core.event.PetEvent;
   import com.robot.core.event.PetFightEvent;
   import com.robot.core.event.RobotEvent;
   import com.robot.core.info.fightInfo.PetFightModel;
   import com.robot.core.info.pet.PetInfo;
   import com.robot.core.info.pet.PetSkillInfo;
   import com.robot.core.manager.LeftToolBarManager;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.manager.PetManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.Bitmap;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.events.MouseEvent;
   import flash.filters.DropShadowFilter;
   import flash.geom.Point;
   import flash.text.TextField;
   import flash.utils.ByteArray;
   import org.taomee.component.bgFill.SoildFillStyle;
   import org.taomee.component.containers.VBox;
   import org.taomee.component.control.MLabel;
   import org.taomee.component.layout.FlowLayout;
   import org.taomee.effect.ColorFilter;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.utils.AlignType;
   import org.taomee.utils.DisplayUtil;
   
   public class AutomaticFightManager
   {
      
      public static const ON:uint = 1;
      
      public static const OFF:uint = 0;
      
      private static var times:uint;
      
      private static var _isClear:Boolean = true;
      
      private static var icon:MovieClip;
      
      private static var tipMC:VBox;
      
      private static var txt:TextField;
      
      private static var isCanOnOff:Boolean = true;
      
      private static var fightTipMC:MovieClip;
      
      private static var isStopBuf:Boolean = false;
      
      public static var autoBossFight:int = 0;
      
      private static var _callFun:Function;
      
      private static var stateLabel:MLabel;
      
      private static var redLabel:MLabel;
       
      
      public function AutomaticFightManager()
      {
         super();
      }
      
      public static function showFightTips() : void
      {
         var _loc1_:SimpleButton = null;
         if(autoBossFight > 0)
         {
            isStopBuf = false;
            return;
         }
         if(!fightTipMC)
         {
            fightTipMC = new lib_fightTip_mc();
            _loc1_ = fightTipMC["stopBtn"];
            _loc1_.addEventListener(MouseEvent.CLICK,closeTipMC);
            DisplayUtil.align(fightTipMC,null,AlignType.MIDDLE_CENTER);
         }
         if(MainManager.actorInfo.autoFightTimes > 0)
         {
            fightTipMC["txt"].text = MainManager.actorInfo.autoFightTimes.toString();
            MainManager.getStage().addChild(fightTipMC);
         }
         else
         {
            closeTipMC(null);
         }
      }
      
      private static function closeTipMC(param1:MouseEvent) : void
      {
         isStopBuf = true;
         DisplayUtil.removeForParent(fightTipMC);
      }
      
      public static function subTimes() : void
      {
         if(MainManager.actorInfo.autoFightTimes > 0)
         {
            --MainManager.actorInfo.autoFightTimes;
         }
         if(MainManager.actorInfo.autoFightTimes > 0)
         {
            showFightTips();
         }
      }
      
      public static function setup() : void
      {
         if(!icon)
         {
            getTipMC();
            icon = UIManager.getMovieClip("autoFight_icon");
            icon.gotoAndStop(1);
            icon.filters = [ColorFilter.setGrayscale(),new DropShadowFilter()];
            icon.buttonMode = true;
            icon.addEventListener(MouseEvent.CLICK,clickIocn);
            icon.addEventListener(MouseEvent.ROLL_OVER,overIcon);
            icon.addEventListener(MouseEvent.ROLL_OUT,outIcon);
            icon.mouseChildren = false;
            txt = icon["txt"];
         }
         checkIcon();
         if(isStart)
         {
            icon.filters = [new DropShadowFilter()];
            FightDispatcher.addEventListener(PetFightEvent.FIGHT_RESULT,onFightOver);
            PetManager.addEventListener(PetEvent.UPDATE_INFO,onUpdateInfo);
         }
         EventManager.addEventListener(RobotEvent.AUTO_FIGHT_CHANGE,onAutoFightChange);
      }
      
      private static function onAutoFightChange(param1:RobotEvent) : void
      {
         txt.text = MainManager.actorInfo.autoFightTimes.toString();
         if(MainManager.actorInfo.autoFightTimes == 0)
         {
            hideIcon();
         }
      }
      
      public static function useItem(param1:uint, param2:Function = null) : void
      {
         _callFun = param2;
         SocketConnection.removeCmdListener(CommandID.USE_AUTO_FIGHT_ITEM,onUseItem);
         SocketConnection.addCmdListener(CommandID.USE_AUTO_FIGHT_ITEM,onUseItem);
         SocketConnection.send(CommandID.USE_AUTO_FIGHT_ITEM,param1);
      }
      
      private static function onUseItem(param1:SocketEvent) : void
      {
         var _loc2_:ByteArray = param1.data as ByteArray;
         MainManager.actorInfo.autoFight = _loc2_.readUnsignedInt();
         MainManager.actorInfo.autoFightTimes = _loc2_.readUnsignedInt();
         checkIcon();
         if(_callFun != null)
         {
            _callFun();
         }
      }
      
      private static function showIcon() : void
      {
         txt.text = MainManager.actorInfo.autoFightTimes.toString();
         LeftToolBarManager.addIcon(icon);
      }
      
      public static function hideIcon() : void
      {
         LeftToolBarManager.delIcon(icon);
      }
      
      private static function setOnOff(param1:uint) : void
      {
         isCanOnOff = false;
         SocketConnection.removeCmdListener(CommandID.ON_OFF_AUTO_FIGHT,onSetAutoFight);
         SocketConnection.addCmdListener(CommandID.ON_OFF_AUTO_FIGHT,onSetAutoFight);
         SocketConnection.send(CommandID.ON_OFF_AUTO_FIGHT,param1);
      }
      
      private static function onSetAutoFight(param1:SocketEvent) : void
      {
         if(isStopBuf)
         {
            isStopBuf = false;
            _isClear = true;
         }
         var _loc2_:ByteArray = param1.data as ByteArray;
         MainManager.actorInfo.autoFight = _loc2_.readUnsignedInt();
         MainManager.actorInfo.autoFightTimes = _loc2_.readUnsignedInt();
         if(isStart)
         {
            icon.gotoAndStop(2);
            icon.filters = [new DropShadowFilter()];
            FightDispatcher.addEventListener(PetFightEvent.FIGHT_CLOSE,onFightOver);
            PetManager.addEventListener(PetEvent.UPDATE_INFO,onUpdateInfo);
         }
         else
         {
            icon.gotoAndStop(1);
            icon.filters = [ColorFilter.setGrayscale(),new DropShadowFilter()];
            FightDispatcher.removeEventListener(PetFightEvent.FIGHT_RESULT,onFightOver);
            PetManager.removeEventListener(PetEvent.UPDATE_INFO,onUpdateInfo);
         }
         isCanOnOff = true;
      }
      
      private static function checkIcon() : void
      {
         if(MainManager.actorInfo.autoFight > 0)
         {
            showIcon();
         }
         else
         {
            hideIcon();
         }
      }
      
      private static function clickIocn(param1:MouseEvent) : void
      {
         if(!isCanOnOff)
         {
            return;
         }
         if(MainManager.actorInfo.autoFight == 3)
         {
            setOnOff(0);
         }
         else
         {
            setOnOff(1);
         }
      }
      
      private static function overIcon(param1:MouseEvent) : void
      {
         var _loc2_:Point = icon.localToGlobal(new Point());
         tipMC.x = _loc2_.x + 35;
         tipMC.y = _loc2_.y + 45;
         if(MainManager.actorInfo.autoFight != 3)
         {
            stateLabel.textColor = 13421772;
            stateLabel.text = "未开启状态";
            redLabel.text = "点击可开启该装置";
         }
         else
         {
            stateLabel.textColor = 52224;
            stateLabel.text = "开启状态";
            redLabel.text = "点击可开关闭装置";
         }
         LevelManager.toolsLevel.addChild(tipMC);
      }
      
      private static function outIcon(param1:MouseEvent) : void
      {
         DisplayUtil.removeForParent(tipMC);
      }
      
      public static function get isStart() : Boolean
      {
         if(isStopBuf)
         {
            return false;
         }
         if(autoBossFight > 0)
         {
            return true;
         }
         return MainManager.actorInfo.autoFightTimes > 0 && MainManager.actorInfo.autoFight == 3;
      }
      
      public static function get isClear() : Boolean
      {
         return _isClear;
      }
      
      public static function beginFight(param1:uint, param2:uint) : void
      {
         var _loc4_:PetInfo = null;
         var _loc5_:uint = 0;
         var _loc6_:PetSkillInfo = null;
         if(!isStart || !isClear)
         {
            return;
         }
         if(PetManager.length == 0)
         {
            Alarm.show("你的背包里还没有一只赛尔精灵哦！");
            return;
         }
         var _loc3_:Array = PetManager.infos;
         for each(_loc4_ in _loc3_)
         {
            _loc5_ = 0;
            for each(_loc6_ in _loc4_.skillArray)
            {
               _loc5_ += _loc6_.pp;
            }
            if(_loc4_.hp > 0 && _loc5_ > 0)
            {
               MainManager.actorModel.stop();
               LevelManager.closeMouseEvent();
               PetFightModel.defaultNpcID = param2;
               FightManager.fightWithNpc(param1);
               return;
            }
         }
         Alarm.show("你的赛尔精灵没有体力或不能使用技能了，不能出战哦！");
      }
      
      public static function fightOver(param1:Bitmap) : void
      {
         DisplayUtil.removeForParent(param1);
         PetManager.upDate();
      }
      
      private static function onFightOver(param1:PetFightEvent) : void
      {
         if(isStopBuf)
         {
            setOnOff(0);
         }
         _isClear = false;
         DisplayUtil.removeForParent(fightTipMC);
      }
      
      private static function onUpdateInfo(param1:PetEvent) : void
      {
         var _loc2_:Array = null;
         var _loc3_:PetInfo = null;
         _isClear = true;
         if(isStart)
         {
            _loc2_ = PetManager.infos;
            _loc2_.sortOn("isDefault",Array.DESCENDING);
            _loc3_ = _loc2_[0];
            if(_loc3_.hp <= _loc3_.maxHp / 2)
            {
               PetManager.cureAll(false);
            }
         }
      }
      
      private static function getTipMC() : void
      {
         tipMC = new VBox(-2);
         tipMC.setSizeWH(140,70);
         tipMC.halign = FlowLayout.CENTER;
         tipMC.valign = FlowLayout.MIDLLE;
         tipMC.bgFillStyle = new SoildFillStyle(0,0.8,20,20);
         var _loc1_:MLabel = new MLabel("自动战斗器S型");
         _loc1_.width = 120;
         _loc1_.textColor = 52224;
         _loc1_.blod = true;
         stateLabel = new MLabel();
         stateLabel.textColor = 52224;
         redLabel = new MLabel();
         redLabel.textColor = 16776960;
         stateLabel.fontSize = redLabel.fontSize = 12;
         stateLabel.width = redLabel.width = 120;
         tipMC.appendAll(_loc1_,stateLabel,redLabel);
      }
   }
}
