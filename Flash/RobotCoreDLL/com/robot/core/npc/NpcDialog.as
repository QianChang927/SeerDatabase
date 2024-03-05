package com.robot.core.npc
{
   import com.robot.core.CommandID;
   import com.robot.core.config.xml.EmotionXMLInfo;
   import com.robot.core.event.MapEvent;
   import com.robot.core.manager.LevelManager;
   import com.robot.core.manager.MapManager;
   import com.robot.core.manager.UIManager;
   import com.robot.core.net.SocketConnection;
   import com.robot.core.ui.alert.Alarm;
   import flash.display.Bitmap;
   import flash.display.DisplayObject;
   import flash.display.DisplayObjectContainer;
   import flash.display.MovieClip;
   import flash.display.SimpleButton;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.geom.Point;
   import flash.utils.ByteArray;
   import flash.utils.clearTimeout;
   import flash.utils.getDefinitionByName;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   import org.taomee.component.containers.Box;
   import org.taomee.component.containers.VBox;
   import org.taomee.component.control.MLabel;
   import org.taomee.component.control.MLabelButton;
   import org.taomee.component.control.MLoadPane;
   import org.taomee.component.layout.FlowLayout;
   import org.taomee.component.layout.FlowWarpLayout;
   import org.taomee.component.manager.MComponentManager;
   import org.taomee.debug.DebugTrace;
   import org.taomee.events.SocketEvent;
   import org.taomee.manager.EventManager;
   import org.taomee.manager.ResourceManager;
   import org.taomee.utils.DisplayUtil;
   
   public class NpcDialog
   {
      
      private static var _npcBmp:Bitmap;
      
      private static var _dialogA:Array;
      
      private static var _questionA:Array;
      
      private static var _handlerA:Array;
      
      private static var _bgMc:Sprite;
      
      private static var _prevBtn:MovieClip;
      
      private static var _nextBtn:MovieClip;
      
      private static var _txtBtn:SimpleButton;
      
      private static var _curNpcPath:String;
      
      private static const MAX:uint = 3;
      
      private static var txtBox:Box;
      
      private static var btnBox:VBox;
      
      private static var addBtnBox:VBox;
      
      private static var _curIndex:uint = 0;
      
      private static var _btnA:Array = [];
      
      private static var _npcId:uint;
      
      private static var _noShowToolBar:Boolean = false;
      
      private static var _justinBtn:SimpleButton;
      
      private static var _exitHandler:Function;
      
      private static var addQuestionArr:Array = [];
      
      private static var addHandlerArr:Array = [];
      
      private static var _addBtnArr:Array = [];
      
      private static var addLabelBtn:MLabelButton;
      
      private static var _questionEmotion:Array = [];
      
      public static var isshow:Boolean = false;
      
      {
         setup();
      }
      
      public function NpcDialog()
      {
         super();
      }
      
      public static function setup() : void
      {
         _bgMc = UIManager.getMovieClip("NPC_BG_MC");
         _nextBtn = _bgMc["nextBtn"];
         _prevBtn = _bgMc["prevBtn"];
         _prevBtn.gotoAndStop(1);
         _prevBtn.visible = false;
         _txtBtn = _bgMc["txtBtn"];
         _txtBtn.visible = false;
         _txtBtn.addEventListener(MouseEvent.CLICK,onTxtBtnClickHandler);
         txtBox = new Box();
         txtBox.x = 176;
         txtBox.y = 38;
         txtBox.setSizeWH(485,112);
         txtBox.layout = new FlowWarpLayout(FlowWarpLayout.LEFT,FlowWarpLayout.BOTTOM,-3,-2);
         btnBox = new VBox(2);
         btnBox.x = 175;
         btnBox.y = 56;
         btnBox.setSizeWH(500,112);
         btnBox.valign = FlowLayout.BOTTOM;
         addBtnBox = new VBox(2);
         addBtnBox.y = 32;
         addBtnBox.setSizeWH(320,112);
         addBtnBox.valign = FlowLayout.BOTTOM;
         _bgMc.addChild(btnBox);
         _bgMc.addChild(txtBox);
      }
      
      public static function show(param1:uint, param2:Array, param3:Array = null, param4:Array = null, param5:Boolean = false, param6:Function = null, param7:Boolean = false, param8:Boolean = false) : void
      {
         var cls:Class;
         var i1:int = 0;
         var i2:int = 0;
         var npcId:uint = param1;
         var dialogA:Array = param2;
         var questionA:Array = param3;
         var handlerA:Array = param4;
         var noShow:Boolean = param5;
         var exitHandler:Function = param6;
         var newpath:Boolean = param7;
         var isnpc:Boolean = param8;
         if(_bgMc.parent != null)
         {
            return;
         }
         EventManager.addEventListener("openPanel_openMouseEvent",onAfterOenPanel);
         isshow = true;
         btnBox.x = 175;
         btnBox.y = 56;
         txtBox.x = 176;
         txtBox.y = 38;
         if(_npcBmp)
         {
            DisplayUtil.removeForParent(_npcBmp);
            _npcBmp = null;
         }
         btnBox.alpha = 0;
         _noShowToolBar = noShow;
         _exitHandler = exitHandler;
         cls = getDefinitionByName("com.robot.app.toolBar.ToolBarController") as Class;
         cls.panel.hide();
         LevelManager.closeAllMouseEvent();
         if(_curNpcPath != "")
         {
            ResourceManager.cancelURL(_curNpcPath);
         }
         if(_npcBmp)
         {
            DisplayUtil.removeForParent(_npcBmp);
            _npcBmp = null;
         }
         if(_btnA.length > 0)
         {
            i1 = 0;
            while(i1 < _btnA.length)
            {
               (_btnA[i1] as MLabelButton).removeEventListener(MouseEvent.CLICK,onTxtBtnClickHandler);
               _btnA[i1] = null;
               i1++;
            }
         }
         _btnA = [];
         if(_questionEmotion.length > 0)
         {
            i2 = 0;
            while(i2 < _questionEmotion.length)
            {
               DisplayUtil.removeForParent(_questionEmotion[i2]);
               _questionEmotion[i2] = null;
               i2++;
            }
         }
         _questionEmotion = [];
         txtBox.removeAll();
         btnBox.removeAll();
         _npcId = npcId;
         _curNpcPath = NPC.getDialogNpcPathById(npcId);
         if(newpath)
         {
            if(isnpc)
            {
               _curNpcPath = NPC.getNewDialogNpcPathById(npcId);
            }
            else
            {
               _curNpcPath = NPC.getNewDialogpetPathById(npcId);
            }
         }
         _curIndex = 0;
         _dialogA = dialogA;
         _questionA = questionA;
         _handlerA = handlerA;
         _prevBtn.visible = false;
         _prevBtn.gotoAndStop(1);
         if(_dialogA.length <= 1 && _questionA != null)
         {
            _nextBtn.visible = false;
            _nextBtn.gotoAndStop(1);
         }
         else
         {
            _nextBtn.visible = true;
            _nextBtn.play();
         }
         _bgMc.x = 133;
         _bgMc.y = 560;
         LevelManager.topLevel.addChild(_bgMc);
         MapManager.addEventListener(MapEvent.MAP_SWITCH_OPEN,onChangeMap);
         LevelManager.root.mouseEnabled = false;
         LevelManager.root.mouseChildren = false;
         TweenLite.to(_bgMc,0.2,{
            "y":363,
            "height":198,
            "onComplete":function():void
            {
               LevelManager.root.mouseEnabled = true;
               LevelManager.root.mouseChildren = true;
               LevelManager.topLevel.addChild(_bgMc);
               ResourceManager.getResource(_curNpcPath,onComHandler);
               addTxtBtn();
               showTxt(_curIndex);
               addEvent();
               if(Boolean(_questionA) && _questionA.length == 1)
               {
                  _txtBtn.visible = true;
               }
            }
         });
      }
      
      private static function onAfterOenPanel(param1:Event) : void
      {
         LevelManager.closeAllMouseEvent();
      }
      
      private static function onChangeMap(param1:MapEvent) : void
      {
         MapManager.removeEventListener(MapEvent.MAP_SWITCH_OPEN,onChangeMap);
         hide();
      }
      
      public static function showAdd(param1:Array = null, param2:Array = null) : void
      {
         addQuestionArr = param1;
         addHandlerArr = param2;
         if(addQuestionArr.length > 0)
         {
            addLabelBtn = new MLabelButton(addQuestionArr[0]);
            addLabelBtn.overColor = 65535;
            addLabelBtn.outColor = 16776960;
            addLabelBtn.underLine = true;
            addLabelBtn.buttonMode = true;
            addLabelBtn.x = 300;
            addLabelBtn.y = btnBox.y + btnBox.height - addLabelBtn.height;
            _bgMc.addChild(addLabelBtn);
            addLabelBtn.name = "btn" + 0;
            addLabelBtn.addEventListener(MouseEvent.CLICK,onAddTxtBtnClickHandler);
            _addBtnArr.push(addLabelBtn);
         }
      }
      
      private static function addTxtBtn() : void
      {
         var str:String = null;
         var labelBtn:MLabelButton = null;
         var i:int = 0;
         var Yback:Number = NaN;
         var hasEmotion:Boolean = false;
         var reg:RegExp = null;
         var mark:String = null;
         var j:int = 0;
         if(_questionA != null)
         {
            i = 0;
            while(i < _questionA.length)
            {
               str = String(_questionA[i]);
               if(str == "")
               {
                  _nextBtn.visible = true;
                  _nextBtn.play();
               }
               else
               {
                  hasEmotion = false;
                  reg = new RegExp(/(#\d+)/);
                  if(str.search(reg) != -1)
                  {
                     hasEmotion = true;
                     DebugTrace.show(str.split(reg));
                     mark = String(str.split(reg)[1]);
                     str = str.replace(/(#\d+)/,"");
                  }
                  labelBtn = new MLabelButton(str);
                  labelBtn.outColor = 16776960;
                  labelBtn.overColor = 65535;
                  labelBtn.underLine = true;
                  labelBtn.buttonMode = true;
                  labelBtn.name = "btn" + i;
                  labelBtn.addEventListener(MouseEvent.CLICK,onTxtBtnClickHandler);
                  btnBox.append(labelBtn);
                  _btnA.push(labelBtn);
                  if(hasEmotion)
                  {
                     addQuestionEmotion(mark,labelBtn);
                  }
               }
               i++;
            }
            if(_questionA.length == 4)
            {
               j = 0;
               while(j < 4)
               {
                  if(j == 0)
                  {
                     _btnA[j].x = 0;
                     _btnA[j].y = 68;
                  }
                  else if(j == 1)
                  {
                     _btnA[j].x = 0;
                     _btnA[j].y = 91;
                  }
                  else if(j == 2)
                  {
                     _btnA[j].x = 243;
                     _btnA[j].y = 68;
                  }
                  else if(j == 3)
                  {
                     _btnA[j].x = 243;
                     _btnA[j].y = 91;
                  }
                  j++;
               }
            }
            LevelManager.root.mouseEnabled = false;
            LevelManager.root.mouseChildren = false;
            Yback = Number(btnBox.y);
            btnBox.y += 20;
            TweenLite.to(btnBox,0.2,{
               "y":Yback,
               "alpha":1,
               "onComplete":function():void
               {
                  LevelManager.root.mouseEnabled = true;
                  LevelManager.root.mouseChildren = true;
               }
            });
         }
      }
      
      private static function addQuestionEmotion(param1:String, param2:DisplayObject) : void
      {
         var m:String = param1;
         var dis:DisplayObject = param2;
         ResourceManager.getResource(EmotionXMLInfo.getURL(m),function(param1:DisplayObject):void
         {
            var id:uint = 0;
            var o:DisplayObject = param1;
            id = setTimeout(function():void
            {
               var _loc1_:* = o as MovieClip;
               _loc1_.x = btnBox.localToGlobal(new Point(dis.x,dis.y)).x - _bgMc.x - 14;
               _loc1_.y = btnBox.localToGlobal(new Point(dis.x,dis.y)).y - _bgMc.y + 1;
               _bgMc.addChild(_loc1_);
               _questionEmotion.push(_loc1_);
               clearTimeout(id);
            },100);
         },"item");
      }
      
      private static function onAddTxtBtnClickHandler(param1:MouseEvent) : void
      {
         LevelManager.openMouseEvent();
         var _loc2_:String = String((param1.currentTarget as MLabelButton).name);
         var _loc3_:uint = uint(_loc2_.slice(3,_loc2_.length));
         if(addHandlerArr && addHandlerArr[_loc3_] != null && addHandlerArr[_loc3_] != undefined)
         {
            addHandlerArr[_loc3_]();
         }
         hide();
      }
      
      private static function onTxtBtnClickHandler(param1:MouseEvent) : void
      {
         var _loc2_:String = null;
         var _loc3_:uint = 0;
         hide();
         LevelManager.openMouseEvent();
         if(param1.currentTarget == _txtBtn)
         {
            if(_handlerA && _handlerA[0] != null && _handlerA[0] != undefined)
            {
               _handlerA[0]();
            }
         }
         else
         {
            _loc2_ = String((param1.currentTarget as MLabelButton).name);
            _loc3_ = uint(_loc2_.slice(3,_loc2_.length));
            if(_handlerA && _handlerA[_loc3_] != null && _handlerA[_loc3_] != undefined)
            {
               _handlerA[_loc3_]();
            }
         }
      }
      
      private static function onComHandler(param1:DisplayObject) : void
      {
         var targetX:Number;
         var mcFlag:MovieClip;
         var downFlag:MovieClip;
         var startX:Number = NaN;
         var mc:DisplayObject = param1;
         var bgHeight:Number = _bgMc.height;
         _npcBmp = DisplayUtil.copyDisplayAsBmp(mc);
         _bgMc.addChild(_npcBmp);
         _npcBmp.alpha = 0;
         LevelManager.root.mouseEnabled = false;
         LevelManager.root.mouseChildren = false;
         _npcBmp.x = 150 - _npcBmp.width - 30;
         _npcBmp.y = 560 - _bgMc.y - _npcBmp.height;
         targetX = 150 - _npcBmp.width;
         mcFlag = DisplayObjectContainer(mc).getChildByName("mcFlag") as MovieClip;
         if(mcFlag)
         {
            startX = 75;
            targetX = startX - mcFlag.x;
            _npcBmp.y = bgHeight - mcFlag.y - 5;
         }
         downFlag = DisplayObjectContainer(mc).getChildByName("down") as MovieClip;
         if(downFlag)
         {
            targetX = -downFlag.x;
            _npcBmp.y = 153 - downFlag.y;
         }
         TweenLite.to(_npcBmp,0.2,{
            "x":targetX,
            "alpha":1,
            "onComplete":function():void
            {
               LevelManager.root.mouseEnabled = true;
               LevelManager.root.mouseChildren = true;
            }
         });
         _bgMc.setChildIndex(_nextBtn,_bgMc.numChildren - 1);
         _bgMc.setChildIndex(_txtBtn,_bgMc.numChildren - 1);
         if(_npcId == 11)
         {
            _justinBtn = UIManager.getButton("justin_btn");
            _justinBtn.addEventListener(MouseEvent.CLICK,onClickJustin);
            _justinBtn.x = 55;
            _justinBtn.y = 75;
            _bgMc.addChild(_justinBtn);
         }
         if(_npcId == 3788)
         {
            _npcBmp.x += _npcBmp.width;
         }
         if(btnBox.parent != null)
         {
            _bgMc.setChildIndex(btnBox,_bgMc.numChildren - 1);
         }
      }
      
      private static function onClickJustin(param1:Event) : void
      {
         var e:Event = param1;
         SocketConnection.sendByQueue(CommandID.BATCH_GET_BITSET,[1,12845],function(param1:SocketEvent):void
         {
            var _loc2_:ByteArray = param1.data as ByteArray;
            _loc2_.readUnsignedInt();
            var _loc3_:uint = _loc2_.readUnsignedByte();
            if(_loc3_ == 1)
            {
               Alarm.show("您已经领取过了，不能重复领取！");
            }
            else
            {
               SocketConnection.send(CommandID.COMMAND_4548,748,1);
            }
         });
      }
      
      private static function addEvent() : void
      {
         _nextBtn.addEventListener(MouseEvent.CLICK,onNextClickHandler);
         _prevBtn.addEventListener(MouseEvent.CLICK,onPrevClickHandler);
      }
      
      private static function removeEvent() : void
      {
         _nextBtn.removeEventListener(MouseEvent.CLICK,onNextClickHandler);
         _prevBtn.removeEventListener(MouseEvent.CLICK,onPrevClickHandler);
      }
      
      private static function onNextClickHandler(param1:MouseEvent) : void
      {
         ++_curIndex;
         if(_curIndex >= _dialogA.length)
         {
            hide();
            LevelManager.openMouseEvent();
            if(_exitHandler != null)
            {
               _exitHandler();
            }
         }
         else
         {
            showTxt(_curIndex);
         }
      }
      
      private static function onPrevClickHandler(param1:MouseEvent) : void
      {
         --_curIndex;
         if(_curIndex < 0)
         {
            _nextBtn.visible = true;
            _nextBtn.play();
            _prevBtn.visible = false;
            _prevBtn.stop();
         }
         else
         {
            showTxt(_curIndex);
            if(_curIndex == 0)
            {
               _nextBtn.visible = true;
               _nextBtn.play();
               _prevBtn.visible = false;
               _prevBtn.stop();
            }
         }
      }
      
      public static function hide() : void
      {
         var _loc1_:Class = null;
         isshow = false;
         removeEvent();
         EventManager.removeEventListener("openPanel_openMouseEvent",onAfterOenPanel);
         LevelManager.openMouseEvent();
         if(_npcId == 11 && _justinBtn != null)
         {
            _justinBtn.removeEventListener(MouseEvent.CLICK,onClickJustin);
            DisplayUtil.removeForParent(_justinBtn);
            _justinBtn = null;
         }
         _txtBtn.visible = false;
         DisplayUtil.removeForParent(_bgMc);
         txtBox.removeAll();
         btnBox.removeAll();
         DisplayUtil.removeForParent(addLabelBtn);
         if(!_noShowToolBar)
         {
            _loc1_ = getDefinitionByName("com.robot.app.toolBar.ToolBarController") as Class;
            _loc1_.panel.show();
         }
         addQuestionArr = [];
         addHandlerArr = [];
         _addBtnArr = [];
      }
      
      private static function showTxt(param1:uint) : void
      {
         var str:String;
         var parse:ParseDialogStr;
         var count:uint;
         var fontStr:String;
         var i:String = null;
         var bmp:Bitmap = null;
         var j:uint = 0;
         var allowArray:Array = null;
         var s:String = null;
         var lable:MLabel = null;
         var loadPanel:MLoadPane = null;
         var index:uint = param1;
         txtBox.removeAll();
         str = "    " + _dialogA[index];
         parse = new ParseDialogStr(str);
         count = 0;
         fontStr = String(MComponentManager.font);
         MComponentManager.font = "宋体";
         for each(i in parse.strArray)
         {
            j = 0;
            while(j < i.length)
            {
               s = i.charAt(j);
               lable = new MLabel(s);
               lable.textColor = uint("0x" + parse.getColor(count));
               lable.cacheAsBitmap = true;
               txtBox.append(lable);
               j++;
            }
            count++;
            allowArray = [1,10,101,11,2,3,4,5,6,7,8,9,97,98,99];
            if(parse.getEmotionNum(count) != -1 && allowArray.indexOf(parse.getEmotionNum(count)) != -1)
            {
               loadPanel = new MLoadPane(EmotionXMLInfo.getURL("#" + parse.getEmotionNum(count)),MLoadPane.FIT_NONE,MLoadPane.MIDDLE,MLoadPane.MIDDLE);
               loadPanel.setSizeWH(45,40);
               txtBox.append(loadPanel);
            }
         }
         MComponentManager.font = fontStr;
         LevelManager.root.mouseEnabled = false;
         LevelManager.root.mouseChildren = false;
         bmp = DisplayUtil.copyDisplayAsBmp(txtBox);
         bmp.x = txtBox.x;
         bmp.y = txtBox.y;
         bmp.alpha = 0;
         txtBox.visible = false;
         _bgMc.addChild(bmp);
         TweenLite.to(bmp,0.2,{
            "alpha":1,
            "onComplete":function():void
            {
               txtBox.visible = true;
               DisplayUtil.removeForParent(bmp);
               bmp = null;
               LevelManager.root.mouseEnabled = true;
               LevelManager.root.mouseChildren = true;
            }
         });
      }
   }
}
