package com.robot.core.ui.itemTip
{
   import com.robot.core.config.ClientConfig;
   import com.robot.core.config.xml.CountermarkXMLInfo;
   import com.robot.core.config.xml.GemsXMLInfo;
   import com.robot.core.config.xml.ItemXMLInfo;
   import com.robot.core.config.xml.PetXMLInfo;
   import com.robot.core.config.xml.SkillXMLInfo;
   import com.robot.core.info.userItem.CountermarkType;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MainManager;
   import com.robot.core.utils.CommonUI;
   import flash.display.DisplayObject;
   import flash.display.Loader;
   import flash.display.MovieClip;
   import flash.events.Event;
   import flash.geom.Point;
   import flash.net.URLRequest;
   import flash.system.ApplicationDomain;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class CountermarkItemTip
   {
      
      public static const TYPE_ARR:Array = ["攻击","防御","特攻","特防","速度","体力"];
      
      private static const TEXT_GAP:uint = 20;
      
      private static var _grid:Object;
      
      private static var _ui:MovieClip;
      
      private static var _adjArr:Array;
      
      private static var _tipsUI:Array;
      
      private static var isLoading:String = "loadNotStart";
      
      private static var _hideLine:int;
       
      
      public function CountermarkItemTip()
      {
         super();
      }
      
      public static function show(param1:CountermarkItemGrid) : void
      {
         if(!param1 || !param1.grid)
         {
            return;
         }
         if(_grid)
         {
            destroy();
         }
         _grid = param1;
         if(Boolean(_grid) && Boolean(_grid.info))
         {
            init();
         }
      }
      
      public static function showObject(param1:Object) : void
      {
         if(!param1 || !param1.grid)
         {
            return;
         }
         if(_grid)
         {
            destroy();
         }
         _grid = param1;
         if(Boolean(_grid) && Boolean(_grid.info))
         {
            init();
         }
      }
      
      private static function loadUI() : void
      {
         var loader:Loader = null;
         var onComplete:Function = null;
         onComplete = function(param1:Event):void
         {
            loader.contentLoaderInfo.removeEventListener(Event.COMPLETE,onComplete);
            var _loc2_:ApplicationDomain = loader.contentLoaderInfo.applicationDomain;
            _tipsUI = new Array();
            _tipsUI["ability"] = _loc2_.getDefinition("CountmarkGeneralTip_UI") as Class;
            _tipsUI["skill"] = _loc2_.getDefinition("CountmarkSkillTip_UI") as Class;
            _tipsUI["universal"] = _loc2_.getDefinition("CountmarkUniversalTip_UI") as Class;
            _tipsUI["quanxiao"] = _loc2_.getDefinition("CountmarkQuanxiaoTip_UI") as Class;
            _tipsUI["piece"] = _loc2_.getDefinition("CountmarkPieceTip_UI") as Class;
            isLoading = "loadEnd";
            init();
         };
         if(isLoading != "loadNotStart")
         {
            return;
         }
         isLoading = "loadStarting";
         loader = new Loader();
         loader.contentLoaderInfo.addEventListener(Event.COMPLETE,onComplete);
         loader.load(new URLRequest(ClientConfig.getResPath("countermark/tip/countermarkTip.swf")));
      }
      
      private static function init() : void
      {
         if(isLoading != "loadEnd")
         {
            loadUI();
            return;
         }
         if(!_grid || !_grid.info)
         {
            return;
         }
         _hideLine = 0;
         if(CountermarkXMLInfo.isUniversalMark(_grid.info.markID))
         {
            _ui = new _tipsUI["universal"]();
            buildUniversal();
         }
         else if(CountermarkXMLInfo.isAbilityMark(_grid.info.markID))
         {
            _ui = new _tipsUI["ability"]();
            buildGeneral();
         }
         else if(CountermarkXMLInfo.isSkillMark(_grid.info.markID))
         {
            _ui = new _tipsUI["skill"]();
            buildSkill();
         }
         else if(CountermarkXMLInfo.isQuanxiaoMark(_grid.info.markID))
         {
            _ui = new _tipsUI["quanxiao"]();
            _ui["markName"].wordWrap = true;
            buildSkill();
         }
         else if(CountermarkXMLInfo.isMarkPiece(_grid.info.markID))
         {
            _ui = new _tipsUI["piece"]();
            _ui.markName.htmlText = getColorName(_grid.info.markID);
            buildAlign();
         }
         CommonUI.resetUiAllTxtFont(_ui);
         LevelManager.tipLevel.addChild(_ui);
      }
      
      private static function buildUniversal() : void
      {
         if(_grid.info.hasExtraAttri)
         {
            _ui.gotoAndStop(2);
            buildUniversalExtraAdj();
         }
         else
         {
            _ui.gotoAndStop(1);
         }
         buildNameAndType();
         buildUniversalAdj();
         buildBind();
         buildLayout();
         buildAlign();
      }
      
      private static function buildGeneral() : void
      {
         buildNameAndType();
         buildGeneralAdj();
         buildLayout();
         buildAlign();
      }
      
      private static function buildSkill() : void
      {
         buildNameAndType();
         _ui.attrs.attr_0.text = "效果：" + CountermarkXMLInfo.getEffectDes(_grid.info.markID);
         _ui.misc.monster.text = "限定：" + CountermarkXMLInfo.getRestrictDes(_grid.info.markID);
         buildAlign();
      }
      
      private static function buildLayout() : void
      {
         var _loc1_:int = 3 - Math.ceil(_adjArr.length / 2);
         _ui.bg.height -= (_loc1_ + _hideLine) * TEXT_GAP;
         _ui.misc.y -= _loc1_ * TEXT_GAP;
         if(_grid.info.hasExtraAttri)
         {
            _ui.hideAttriMc.y = _ui.misc.y + _ui.misc.height - _hideLine * TEXT_GAP;
         }
      }
      
      private static function buildNameAndType() : void
      {
         _ui.markName.wordWrap = true;
         _ui.markName.multiline = true;
         _ui.markName.htmlText = getColorName(_grid.info.markID);
         if(CountermarkXMLInfo.isUniversalMark(_grid.info.markID))
         {
            _ui.attrs.type.text = CountermarkXMLInfo.getTypeName(_grid.info.markID);
         }
         else
         {
            _ui.type.text = CountermarkXMLInfo.getTypeName(_grid.info.markID);
         }
      }
      
      private static function buildAlign() : void
      {
         if(!_grid || !_grid.grid)
         {
            return;
         }
         var _loc1_:Point = new Point(_grid.grid.x,_grid.grid.y);
         _loc1_ = _grid.grid.parent.localToGlobal(_loc1_);
         if(_loc1_.x + _grid.grid.width + _ui.width > MainManager.getStage().width)
         {
            _ui.x = _loc1_.x - _ui.width;
         }
         else
         {
            _ui.x = _loc1_.x + _grid.grid.width;
         }
         if(_loc1_.y + _ui.height > MainManager.getStage().height)
         {
            _ui.y = MainManager.getStage().height - _ui.height;
         }
         else
         {
            _ui.y = _loc1_.y;
         }
      }
      
      private static function buildBind() : void
      {
         var arr:Array = [];
         if(_grid.info.isBindMon)
         {
            _ui.misc.monster.text = "绑定于精灵：" + PetXMLInfo.getName(_grid.info.bindMonID);
            arr.push(_ui.misc.monster);
         }
         else
         {
            _ui.misc.monster.visible = false;
            ++_hideLine;
         }
         if(_grid.info.isBindGem)
         {
            _ui.misc.gem.gemDesc.text = GemsXMLInfo.getName(_grid.info.gemID);
            ResourceManager.getResource(ItemXMLInfo.getIconURL(_grid.info.gemID),function(param1:DisplayObject):void
            {
               if(_ui)
               {
                  _ui.misc.gem.gemIcon.addChild(param1);
                  CommonUI.equalScale(param1,20,20);
                  CommonUI.centerAlign(param1,_ui.misc.gem.gemIcon,new Point(13,13));
               }
            });
         }
         else if(CountermarkXMLInfo.getType(_grid.info.markID) != CountermarkType.MARK_IS_UNIVERSAL)
         {
            _ui.misc.gem.gemDesc.text = "不可镶嵌特效宝石";
         }
         else
         {
            _ui.misc.gem.gemDesc.text = "可镶嵌特效宝石";
         }
         arr.push(_ui.misc.gem);
         if(_grid.info.isBindMove)
         {
            _ui.misc.skill.text = "当前附加于：" + SkillXMLInfo.getName(_grid.info.bindMoveID);
            arr.push(_ui.misc.skill);
         }
         else
         {
            _ui.misc.skill.visible = false;
            ++_hideLine;
         }
         buildBindLayout(arr);
      }
      
      private static function buildBindLayout(param1:Array) : void
      {
         param1[0].y = 0;
         var _loc2_:int = 1;
         while(_loc2_ < param1.length)
         {
            param1[_loc2_].y = param1[_loc2_ - 1].y + param1[_loc2_ - 1].height + 5;
            _loc2_++;
         }
      }
      
      private static function buildUniversalAdj() : void
      {
         var _loc1_:Array = CountermarkXMLInfo.getMaxAttriValue(_grid.info.markID);
         _adjArr = [];
         var _loc2_:int = 0;
         while(_loc2_ < 6)
         {
            _adjArr.push("+" + _grid.info.adjArray[_loc2_] + "/" + int(_loc1_[_loc2_]));
            if(int(_loc1_[_loc2_]) > 0)
            {
               _ui.attrs["attr_" + _loc2_].text = _adjArr[_loc2_];
            }
            else
            {
               _ui.attrs["attr_" + _loc2_].text = "+0/0";
            }
            _loc2_++;
         }
         _ui.levelTxt.text = "Lv." + _grid.info.level + "/5";
      }
      
      private static function buildUniversalExtraAdj() : void
      {
         var _loc1_:Array = _grid.info.extraAttri;
         var _loc2_:int = 0;
         while(_loc2_ < 6)
         {
            if(int(_loc1_[_loc2_]) > 0)
            {
               _ui.hideAttriMc["attr_" + _loc2_].text = "+" + _loc1_[_loc2_];
            }
            else
            {
               _ui.hideAttriMc["attr_" + _loc2_].text = "+0";
            }
            _loc2_++;
         }
         var _loc3_:int = CountermarkXMLInfo.getMaxGrade(_grid.info.markID);
         _ui.hideAttriMc.activeMc.gotoAndStop(_grid.info.level == _loc3_ ? 1 : 2);
      }
      
      private static function buildGeneralAdj() : void
      {
         var _loc1_:Array = CountermarkXMLInfo.getArg(_grid.info.markID);
         _adjArr = [];
         var _loc2_:int = 0;
         while(_loc2_ < 6)
         {
            if(int(_loc1_[_loc2_]) > 0)
            {
               _adjArr.push(TYPE_ARR[_loc2_] + "+" + _loc1_[_loc2_]);
            }
            _loc2_++;
         }
         _loc2_ = 0;
         while(_loc2_ < 6)
         {
            if(_loc2_ < _adjArr.length)
            {
               _ui.attrs["attr_" + _loc2_].text = _adjArr[_loc2_];
            }
            else
            {
               _ui.attrs["attr_" + _loc2_].text = "";
            }
            _loc2_++;
         }
         _ui.misc.monster.text = "限定：" + CountermarkXMLInfo.getRestrictDes(_grid.info.markID);
      }
      
      public static function getColorName(param1:int) : String
      {
         var _loc3_:String = null;
         var _loc2_:int = int(CountermarkXMLInfo.getMintmarkQuality(param1));
         if(CountermarkXMLInfo.getType(param1) != CountermarkType.MARK_IS_UNIVERSAL)
         {
            _loc2_ = 0;
         }
         switch(_loc2_)
         {
            case 0:
               _loc3_ = "#FFFFFF";
               break;
            case 1:
               _loc3_ = "#FFFFFF";
               break;
            case 2:
               _loc3_ = "#66FF00";
               break;
            case 3:
               _loc3_ = "#1E90FF";
               break;
            case 4:
               _loc3_ = "#FF00FF";
               break;
            case 5:
               _loc3_ = "#FFFF00";
         }
         return "<font color=\'" + _loc3_ + "\'>" + CountermarkXMLInfo.getDes(param1) + "</font>";
      }
      
      public static function destroy() : void
      {
         if(_ui)
         {
            DisplayUtil.removeForParent(_ui);
            _ui = null;
            _grid = null;
            _adjArr = null;
         }
      }
   }
}
