package com.robot.module.app
{
   import com.robot.app.task.petstory.util.KTool;
   import com.robot.app2.control.activityHelper.ActivityModel;
   import com.robot.core.manager.ModuleManager;
   import com.robot.core.manager.SystemTimerManager;
   import com.robot.core.ui.alert.Alarm2;
   import com.robot.core.ui.alert.Alert;
   import com.robot.core.utils.BitUtils;
   import flash.display.GradientType;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.MouseEvent;
   import flash.events.TimerEvent;
   import flash.filters.GlowFilter;
   import flash.geom.Matrix;
   import flash.geom.Point;
   import flash.utils.Timer;
   import flash.utils.clearTimeout;
   import flash.utils.setTimeout;
   import gs.TweenLite;
   
   public class SpaceshipSystemMaintenanceGame2Panel extends ActivityModel
   {
      private var _commdId:int;
      
      private const ROWS:int = 5;
      
      private const COLS:int = 8;
      
      private const CELL_SIZE:int = 80;
      
      private var board:Array;
      
      private var cells:Array;
      
      private var selectedCell:Cell;
      
      private var linkLine:Sprite;
      
      private var effectLayer:Sprite;
      
      private var _isInitGame:Boolean = false;
      
      private var _isAllRight:Boolean = false;
      
      private var _curIndex:int = 1;
      
      private var _time:int = 60;
      
      private var _timeOut:int;
      
      public function SpaceshipSystemMaintenanceGame2Panel()
      {
         super();
         resUrl = "2024/1122/SpaceshipSystemMaintenanceGame2Panel";
         configUrl = "2024/1122/spaceshipSystemMaintenanceConfig";
      }
      
      override public function init(data:Object = null) : void
      {
      }
      
      override public function show() : void
      {
         super.show();
         _mainUI.btnMc.gotoAndStop(1);
      }
      
      private function initGame() : void
      {
         this.board = [];
         this.cells = [];
         this.createBoard();
         this.createCells();
         this.linkLine = new Sprite();
         this.effectLayer = new Sprite();
         _mainUI.gameMc.container.addChild(this.linkLine);
         _mainUI.gameMc.container.addChild(this.effectLayer);
      }
      
      private function createBoard() : void
      {
         var i:int;
         var row:int;
         var index:int = 0;
         var col:int = 0;
         var numbers:Array = [1,1,2,2,3,3,4,4];
         for(i = 0; i < this.ROWS * this.COLS / 2 - 4; i++)
         {
            index = int(Math.random() * 4 + 1);
            numbers.push(index);
            numbers.push(index);
         }
         numbers.sort(function(a:*, b:*):Number
         {
            return Math.random() > 0.5 ? 1 : -1;
         });
         index = 0;
         for(row = 0; row < this.ROWS; row++)
         {
            this.board[row] = [];
            this.cells[row] = [];
            for(col = 0; col < this.COLS; col++)
            {
               this.board[row][col] = numbers[index++];
            }
         }
      }
      
      private function createCells() : void
      {
         var col:int = 0;
         var cell:Cell = null;
         for(var row:int = 0; row < this.ROWS; row++)
         {
            for(col = 0; col < this.COLS; col++)
            {
               cell = new Cell(this.board[row][col],getSymbolFromLib("item") as MovieClip);
               cell.x = col * this.CELL_SIZE;
               cell.y = row * this.CELL_SIZE;
               cell.row = row;
               cell.col = col;
               cell.addEventListener(MouseEvent.CLICK,this.onCellClick);
               _mainUI.gameMc.container.addChild(cell);
               this.cells[row][col] = cell;
            }
         }
      }
      
      private function onCellClick(e:MouseEvent) : void
      {
         var cell:Cell = null;
         var path:Array = null;
         cell = e.currentTarget as Cell;
         if(!cell.isActive)
         {
            return;
         }
         if(this.selectedCell == null)
         {
            this.selectedCell = cell;
            cell.select();
         }
         else if(this.selectedCell == cell)
         {
            this.selectedCell.unselect();
            this.selectedCell = null;
            this.clearLinkLine();
         }
         else
         {
            path = this.findPath(this.selectedCell,cell);
            if(path && this.selectedCell.value == cell.value && this.isValidPath(path))
            {
               cell.select();
               this.drawLinkLine(path);
               this.addLinkEffect(path);
               closeEvent();
               setTimeout(function():void
               {
                  removeLink(selectedCell,cell);
                  clearLinkLine();
                  checkGameOver();
                  selectedCell.unselect();
                  selectedCell = null;
                  openEvent();
               },300);
            }
            else
            {
               this.selectedCell.unselect();
               this.selectedCell = null;
            }
         }
      }
      
      private function findPath(start:Cell, end:Cell) : Array
      {
         if(this.canLinkDirect(start,end))
         {
            return [new Point(start.col,start.row),new Point(end.col,end.row)];
         }
         var oneCornerPath:Array = this.findOneCornerPath(start,end);
         if(Boolean(oneCornerPath))
         {
            return oneCornerPath;
         }
         var twoCornerPath:Array = this.findTwoCornerPath(start,end);
         if(Boolean(twoCornerPath))
         {
            return twoCornerPath;
         }
         return this.findVirtualPath(start,end);
      }
      
      private function findVirtualPath(start:Cell, end:Cell) : Array
      {
         var testPath:Array = null;
         var possiblePaths:Array = [];
         possiblePaths.push([new Point(start.col,-1),new Point(end.col,-1)]);
         possiblePaths.push([new Point(start.col,this.ROWS),new Point(end.col,this.ROWS)]);
         possiblePaths.push([new Point(-1,start.row),new Point(-1,end.row)]);
         possiblePaths.push([new Point(this.COLS,start.row),new Point(this.COLS,end.row)]);
         for(var i:int = 0; i < possiblePaths.length; i++)
         {
            testPath = [new Point(start.col,start.row)];
            testPath = testPath.concat(possiblePaths[i]);
            testPath.push(new Point(end.col,end.row));
            if(this.isValidVirtualPath(testPath))
            {
               return testPath;
            }
         }
         return null;
      }
      
      private function isValidVirtualPath(path:Array) : Boolean
      {
         var current:Point = null;
         var next:Point = null;
         var realCell:Cell = null;
         for(var i:int = 0; i < path.length - 1; i++)
         {
            current = path[i];
            next = path[i + 1];
            if(!this.isVirtualPoint(current))
            {
               realCell = this.cells[current.y][current.x];
               if(!this.isPathClearToVirtual(realCell,next))
               {
                  return false;
               }
            }
            else if(!this.isVirtualPoint(next))
            {
               realCell = this.cells[next.y][next.x];
               if(!this.isPathClearToVirtual(realCell,current))
               {
                  return false;
               }
            }
         }
         return true;
      }
      
      private function canLinkDirect(start:Cell, end:Cell) : Boolean
      {
         var minCol:int = 0;
         var maxCol:int = 0;
         var col:int = 0;
         var minRow:int = 0;
         var maxRow:int = 0;
         var row:int = 0;
         if(start.row == end.row && start.col == end.col)
         {
            return true;
         }
         if(start.row == end.row)
         {
            minCol = Math.min(start.col,end.col);
            maxCol = Math.max(start.col,end.col);
            for(col = minCol + 1; col < maxCol; col++)
            {
               if(Boolean(this.cells[start.row][col].isActive))
               {
                  return false;
               }
            }
            return true;
         }
         if(start.col == end.col)
         {
            minRow = Math.min(start.row,end.row);
            maxRow = Math.max(start.row,end.row);
            for(row = minRow + 1; row < maxRow; row++)
            {
               if(Boolean(this.cells[row][start.col].isActive))
               {
                  return false;
               }
            }
            return true;
         }
         return false;
      }
      
      private function findOneCornerPath(start:Cell, end:Cell) : Array
      {
         var corner1:Point = new Point(end.col,start.row);
         if(!this.cells[corner1.y][corner1.x].isActive)
         {
            if(this.canLinkDirect(start,this.cells[corner1.y][corner1.x]) && this.canLinkDirect(this.cells[corner1.y][corner1.x],end))
            {
               return [new Point(start.col,start.row),corner1,new Point(end.col,end.row)];
            }
         }
         var corner2:Point = new Point(start.col,end.row);
         if(!this.cells[corner2.y][corner2.x].isActive)
         {
            if(this.canLinkDirect(start,this.cells[corner2.y][corner2.x]) && this.canLinkDirect(this.cells[corner2.y][corner2.x],end))
            {
               return [new Point(start.col,start.row),corner2,new Point(end.col,end.row)];
            }
         }
         return null;
      }
      
      private function findTwoCornerPath(start:Cell, end:Cell) : Array
      {
         var col:int = 0;
         var corner1:Point = null;
         var corner2:Point = null;
         for(var row:int = -1; row <= this.ROWS; row++)
         {
            for(col = -1; col <= this.COLS; col++)
            {
               if(!(row < 0 || row >= this.ROWS || col < 0 || col >= this.COLS))
               {
                  corner1 = new Point(col,start.row);
                  corner2 = new Point(col,end.row);
                  if(this.isValidCorner(corner1) && this.isValidCorner(corner2))
                  {
                     if(this.canLinkDirect(start,this.cells[corner1.y][corner1.x]) && this.canLinkDirect(this.cells[corner1.y][corner1.x],this.cells[corner2.y][corner2.x]) && this.canLinkDirect(this.cells[corner2.y][corner2.x],end))
                     {
                        return [new Point(start.col,start.row),corner1,corner2,new Point(end.col,end.row)];
                     }
                  }
                  corner1 = new Point(start.col,row);
                  corner2 = new Point(end.col,row);
                  if(this.isValidCorner(corner1) && this.isValidCorner(corner2))
                  {
                     if(this.canLinkDirect(start,this.cells[corner1.y][corner1.x]) && this.canLinkDirect(this.cells[corner1.y][corner1.x],this.cells[corner2.y][corner2.x]) && this.canLinkDirect(this.cells[corner2.y][corner2.x],end))
                     {
                        return [new Point(start.col,start.row),corner1,corner2,new Point(end.col,end.row)];
                     }
                  }
               }
            }
         }
         return null;
      }
      
      private function findBoundaryPath(start:Cell, end:Cell) : Array
      {
         if(!this.isOnBoundary(start) && !this.isOnBoundary(end))
         {
            return null;
         }
         if(this.isOnSameBoundary(start,end))
         {
            return this.findSameBoundaryPath(start,end);
         }
         return this.findDifferentBoundaryPath(start,end);
      }
      
      private function findSameBoundaryPath(start:Cell, end:Cell) : Array
      {
         if(this.canLinkDirect(start,end))
         {
            return [new Point(start.col,start.row),new Point(end.col,end.row)];
         }
         var path:Array = [];
         path.push(new Point(start.col,start.row));
         if(start.row == 0)
         {
            path.push(new Point(start.col,-1));
            path.push(new Point(end.col,-1));
         }
         else if(start.row == this.ROWS - 1)
         {
            path.push(new Point(start.col,this.ROWS));
            path.push(new Point(end.col,this.ROWS));
         }
         else if(start.col == 0)
         {
            path.push(new Point(-1,start.row));
            path.push(new Point(-1,end.row));
         }
         else if(start.col == this.COLS - 1)
         {
            path.push(new Point(this.COLS,start.row));
            path.push(new Point(this.COLS,end.row));
         }
         path.push(new Point(end.col,end.row));
         if(this.isValidPath(path))
         {
            return path;
         }
         return null;
      }
      
      private function findDifferentBoundaryPath(start:Cell, end:Cell) : Array
      {
         var path:Array;
         var possiblePaths:Array;
         var i:int;
         var validPath:Array = null;
         var tryPath:Function = function(middlePoints:Array):Array
         {
            var p1:Point = null;
            var p2:Point = null;
            var realPoint:Cell = null;
            var testPath:Array = [new Point(start.col,start.row)];
            testPath = testPath.concat(middlePoints);
            testPath.push(new Point(end.col,end.row));
            for(var i:int = 0; i < testPath.length - 1; i++)
            {
               p1 = testPath[i];
               p2 = testPath[i + 1];
               if(!isVirtualPoint(p1) && !isVirtualPoint(p2))
               {
                  if(!canLinkDirect(cells[p1.y][p1.x],cells[p2.y][p2.x]))
                  {
                     return null;
                  }
               }
               else if(!isVirtualPoint(p1))
               {
                  realPoint = cells[p1.y][p1.x];
                  if(!isPathClearToVirtual(realPoint,p2))
                  {
                     return null;
                  }
               }
               else if(!isVirtualPoint(p2))
               {
                  realPoint = cells[p2.y][p2.x];
                  if(!isPathClearToVirtual(realPoint,p1))
                  {
                     return null;
                  }
               }
            }
            return testPath;
         };
         var normalPath:Array = this.findTwoCornerPath(start,end);
         if(Boolean(normalPath))
         {
            return normalPath;
         }
         path = [];
         path.push(new Point(start.col,start.row));
         possiblePaths = [];
         if(start.row == 0)
         {
            possiblePaths.push([new Point(start.col,-1),new Point(end.col,-1)]);
         }
         if(start.row == this.ROWS - 1)
         {
            possiblePaths.push([new Point(start.col,this.ROWS),new Point(end.col,this.ROWS)]);
         }
         if(start.col == 0)
         {
            possiblePaths.push([new Point(-1,start.row),new Point(-1,end.row)]);
         }
         if(start.col == this.COLS - 1)
         {
            possiblePaths.push([new Point(this.COLS,start.row),new Point(this.COLS,end.row)]);
         }
         if(end.row == 0)
         {
            possiblePaths.push([new Point(start.col,-1),new Point(end.col,-1)]);
         }
         if(end.row == this.ROWS - 1)
         {
            possiblePaths.push([new Point(start.col,this.ROWS),new Point(end.col,this.ROWS)]);
         }
         if(end.col == 0)
         {
            possiblePaths.push([new Point(-1,start.row),new Point(-1,end.row)]);
         }
         if(end.col == this.COLS - 1)
         {
            possiblePaths.push([new Point(this.COLS,start.row),new Point(this.COLS,end.row)]);
         }
         for(i = 0; i < possiblePaths.length; i++)
         {
            validPath = tryPath(possiblePaths[i]);
            if(Boolean(validPath))
            {
               return validPath;
            }
         }
         return null;
      }
      
      private function isPathClearToVirtual(realCell:Cell, virtualPoint:Point) : Boolean
      {
         var col:int = 0;
         var row:int = 0;
         if(virtualPoint.x < 0)
         {
            for(col = realCell.col - 1; col >= 0; col--)
            {
               if(Boolean(this.cells[realCell.row][col].isActive))
               {
                  return false;
               }
            }
         }
         else if(virtualPoint.x >= this.COLS)
         {
            for(col = realCell.col + 1; col < this.COLS; col++)
            {
               if(Boolean(this.cells[realCell.row][col].isActive))
               {
                  return false;
               }
            }
         }
         if(virtualPoint.y < 0)
         {
            for(row = realCell.row - 1; row >= 0; row--)
            {
               if(Boolean(this.cells[row][realCell.col].isActive))
               {
                  return false;
               }
            }
         }
         else if(virtualPoint.y >= this.ROWS)
         {
            for(row = realCell.row + 1; row < this.ROWS; row++)
            {
               if(Boolean(this.cells[row][realCell.col].isActive))
               {
                  return false;
               }
            }
         }
         return true;
      }
      
      private function isOnBoundary(cell:Cell) : Boolean
      {
         return cell.row == 0 || cell.row == this.ROWS - 1 || cell.col == 0 || cell.col == this.COLS - 1;
      }
      
      private function isOnSameBoundary(start:Cell, end:Cell) : Boolean
      {
         return start.row == 0 && end.row == 0 || start.row == this.ROWS - 1 && end.row == this.ROWS - 1 || start.col == 0 && end.col == 0 || start.col == this.COLS - 1 && end.col == this.COLS - 1;
      }
      
      private function isValidCorner(point:Point) : Boolean
      {
         if(point.x < 0 || point.x >= this.COLS || point.y < 0 || point.y >= this.ROWS)
         {
            return false;
         }
         return !this.cells[point.y][point.x].isActive;
      }
      
      private function canConnect(p1:Point, p2:Point) : Boolean
      {
         if(this.isVirtualPoint(p1) || this.isVirtualPoint(p2))
         {
            return true;
         }
         var start:Cell = this.cells[p1.y][p1.x];
         var end:Cell = this.cells[p2.y][p2.x];
         return this.canLinkDirect(start,end);
      }
      
      private function isVirtualPoint(point:Point) : Boolean
      {
         return point.x < 0 || point.x >= this.COLS || point.y < 0 || point.y >= this.ROWS;
      }
      
      private function isValidPath(path:Array) : Boolean
      {
         var current:Point = null;
         var next:Point = null;
         if(!path || path.length < 2)
         {
            return false;
         }
         for(var i:int = 0; i < path.length - 1; i++)
         {
            current = path[i];
            next = path[i + 1];
            if(!(this.isVirtualPoint(current) || this.isVirtualPoint(next)))
            {
               if(!this.canConnect(current,next))
               {
                  return false;
               }
            }
         }
         return true;
      }
      
      private function removeLink(cell1:Cell, cell2:Cell) : void
      {
         var _timer:* = undefined;
         closeEvent();
         cell1.remove();
         cell2.remove();
         _timer = setTimeout(function():void
         {
            clearTimeout(_timer);
            openEvent();
         },500);
      }
      
      private function drawLinkLine(path:Array) : void
      {
         var currentPoint:Point = null;
         var currentX:Number = NaN;
         var currentY:Number = NaN;
         this.clearLinkLine();
         this.linkLine.graphics.clear();
         this.linkLine.graphics.lineStyle(2,16711680);
         var glowFilter:GlowFilter = new GlowFilter(16711680,0.5,6,6,2,1);
         this.linkLine.filters = [glowFilter];
         var startPoint:Point = path[0];
         var startX:Number = startPoint.x * this.CELL_SIZE + this.CELL_SIZE / 2;
         var startY:Number = startPoint.y * this.CELL_SIZE + this.CELL_SIZE / 2;
         this.linkLine.graphics.moveTo(startX,startY);
         for(var i:int = 1; i < path.length; i++)
         {
            currentPoint = path[i];
            if(currentPoint.x < 0)
            {
               currentX = -this.CELL_SIZE / 2;
               currentY = currentPoint.y * this.CELL_SIZE + this.CELL_SIZE / 2;
            }
            else if(currentPoint.x >= this.COLS)
            {
               currentX = this.COLS * this.CELL_SIZE + this.CELL_SIZE / 2;
               currentY = currentPoint.y * this.CELL_SIZE + this.CELL_SIZE / 2;
            }
            else if(currentPoint.y < 0)
            {
               currentX = currentPoint.x * this.CELL_SIZE + this.CELL_SIZE / 2;
               currentY = -this.CELL_SIZE / 2;
            }
            else if(currentPoint.y >= this.ROWS)
            {
               currentX = currentPoint.x * this.CELL_SIZE + this.CELL_SIZE / 2;
               currentY = this.ROWS * this.CELL_SIZE + this.CELL_SIZE / 2;
            }
            else
            {
               currentX = currentPoint.x * this.CELL_SIZE + this.CELL_SIZE / 2;
               currentY = currentPoint.y * this.CELL_SIZE + this.CELL_SIZE / 2;
            }
            this.linkLine.graphics.lineTo(currentX,currentY);
         }
      }
      
      private function clearLinkLine() : void
      {
         this.linkLine.graphics.clear();
         this.effectLayer.graphics.clear();
      }
      
      private function addLinkEffect(path:Array) : void
      {
         var i:int;
         var mainGlow:Sprite = null;
         var trail:Sprite = null;
         var totalLength:Number = NaN;
         var segments:Array = null;
         var progress:Number = NaN;
         var speed:Number = NaN;
         var timer:Timer = null;
         var dx:Number = NaN;
         var dy:Number = NaN;
         var length:Number = NaN;
         if(!this.effectLayer)
         {
            this.effectLayer = new Sprite();
            addChild(this.effectLayer);
         }
         mainGlow = new Sprite();
         mainGlow.graphics.beginFill(16776960,0.8);
         mainGlow.graphics.drawCircle(0,0,5);
         mainGlow.graphics.endFill();
         trail = new Sprite();
         trail.graphics.beginFill(16776960,0.3);
         trail.graphics.drawCircle(0,0,3);
         trail.graphics.endFill();
         this.effectLayer.addChild(mainGlow);
         this.effectLayer.addChild(trail);
         totalLength = 0;
         segments = [];
         for(i = 1; i < path.length; i++)
         {
            dx = (path[i].x - path[i - 1].x) * this.CELL_SIZE;
            dy = (path[i].y - path[i - 1].y) * this.CELL_SIZE;
            length = Math.sqrt(dx * dx + dy * dy);
            totalLength += length;
            segments.push({
               "startX":path[i - 1].x * this.CELL_SIZE + this.CELL_SIZE / 2,
               "startY":path[i - 1].y * this.CELL_SIZE + this.CELL_SIZE / 2,
               "endX":path[i].x * this.CELL_SIZE + this.CELL_SIZE / 2,
               "endY":path[i].y * this.CELL_SIZE + this.CELL_SIZE / 2,
               "length":length
            });
         }
         progress = 0;
         speed = 0.05;
         timer = new Timer(20);
         timer.addEventListener(TimerEvent.TIMER,function():void
         {
            var segment:Object = null;
            var segmentProgress:Number = NaN;
            var trailProgress:Number = NaN;
            progress += speed;
            if(progress >= 1)
            {
               timer.stop();
               effectLayer.removeChild(mainGlow);
               effectLayer.removeChild(trail);
               return;
            }
            var currentLength:Number = totalLength * progress;
            var accumulatedLength:Number = 0;
            for(var i:int = 0; i < segments.length; i++)
            {
               segment = segments[i];
               if(accumulatedLength + segment.length >= currentLength)
               {
                  segmentProgress = (currentLength - accumulatedLength) / segment.length;
                  mainGlow.x = segment.startX + (segment.endX - segment.startX) * segmentProgress;
                  mainGlow.y = segment.startY + (segment.endY - segment.startY) * segmentProgress;
                  trailProgress = Math.max(0,segmentProgress - 0.1);
                  trail.x = segment.startX + (segment.endX - segment.startX) * trailProgress;
                  trail.y = segment.startY + (segment.endY - segment.startY) * trailProgress;
                  addParticles(mainGlow.x,mainGlow.y);
                  break;
               }
               accumulatedLength += segment.length;
            }
         });
         timer.start();
      }
      
      private function addParticles(x:Number, y:Number) : void
      {
         var particle:Sprite = null;
         var angle:Number = NaN;
         var distance:Number = NaN;
         var duration:Number = NaN;
         if(Math.random() < 0.3)
         {
            particle = new Sprite();
            particle.graphics.beginFill(16776960,0.6);
            particle.graphics.drawCircle(0,0,2);
            particle.graphics.endFill();
            particle.x = x;
            particle.y = y;
            this.effectLayer.addChild(particle);
            angle = Math.random() * Math.PI * 2;
            distance = 10 + Math.random() * 10;
            duration = 0.3 + Math.random() * 0.2;
            TweenLite.to(particle,duration,{
               "x":x + Math.cos(angle) * distance,
               "y":y + Math.sin(angle) * distance,
               "alpha":0,
               "scaleX":0.2,
               "scaleY":0.2,
               "onComplete":function():void
               {
                  effectLayer.removeChild(particle);
               }
            });
         }
      }
      
      private function addConnectionEffect(path:Array) : void
      {
         var point:Point = null;
         var x:Number = NaN;
         var y:Number = NaN;
         for(var i:int = 0; i < path.length; i++)
         {
            point = path[i];
            x = point.x * this.CELL_SIZE + this.CELL_SIZE / 2;
            y = point.y * this.CELL_SIZE + this.CELL_SIZE / 2;
            this.addGlowEffect(x,y);
         }
      }
      
      private function addGlowEffect(x:Number, y:Number) : void
      {
         var glow:Sprite = null;
         glow = new Sprite();
         var glowColor:uint = 16776960;
         var matrix:Matrix = new Matrix();
         matrix.createGradientBox(40,40,0,-20,-20);
         glow.graphics.beginGradientFill(GradientType.RADIAL,[glowColor,glowColor],[0.6,0],[0,255],matrix);
         glow.graphics.drawCircle(0,0,20);
         glow.graphics.endFill();
         glow.x = x;
         glow.y = y;
         glow.alpha = 0;
         this.effectLayer.addChild(glow);
         TweenLite.to(glow,0.2,{
            "alpha":1,
            "scaleX":1.5,
            "scaleY":1.5,
            "onComplete":function():void
            {
               TweenLite.to(glow,0.2,{
                  "alpha":0,
                  "scaleX":0.5,
                  "scaleY":0.5,
                  "onComplete":function():void
                  {
                     effectLayer.removeChild(glow);
                  }
               });
            }
         });
      }
      
      private function checkGameOver() : void
      {
         var row:int;
         var col:int = 0;
         var value:int = 0;
         var isOver:Boolean = true;
         for(row = 0; row < this.ROWS; row++)
         {
            for(col = 0; col < this.COLS; col++)
            {
               if(Boolean(this.cells[row][col].isActive))
               {
                  isOver = false;
                  break;
               }
            }
         }
         if(isOver)
         {
            trace("Game Over!");
            SystemTimerManager.removeTickFun(this.onTimer);
            value = int(getValue("daily_11903"));
            sendCmd(this._commdId,[27,3],function():void
            {
               var str:String = BitUtils.getBit(value,2) == 0 ? "舱体清理完成，检修进度提升。" : "舱体清理完成。";
               Alarm2.show(str,function():void
               {
                  hide();
                  ModuleManager.showAppModule("SpaceshipSystemMaintenanceMainPanel");
               });
            });
         }
      }
      
      override protected function onPanelClick(e:*) : void
      {
         var btnName:String = e.target.name;
         var index:int = int(KTool.getIndex(e.target));
         var index1:int = int(KTool.getIndex(e.target.parent));
         switch(btnName)
         {
            case "closeBtn":
               if(_mainUI.btnMc.currentFrame == 2)
               {
                  Alert.show("此时退出游戏进度将不会保存，是否确认要退出游戏？",function():void
                  {
                     hide();
                     ModuleManager.showAppModule("SpaceshipSystemMaintenanceMainPanel");
                  });
               }
               else
               {
                  this.hide();
                  ModuleManager.showAppModule("SpaceshipSystemMaintenanceMainPanel");
               }
               break;
            case "startBtn":
               SystemTimerManager.addTickFun(this.onTimer);
               _mainUI.btnMc.gotoAndStop(2);
               refresh();
               break;
            case "checkBtn":
         }
      }
      
      private function onTimer() : void
      {
         if(this._time == 0)
         {
            if(!this._isAllRight)
            {
               Alarm2.show("时间已耗尽，请再次尝试",function():void
               {
                  hide();
                  ModuleManager.showAppModule("SpaceshipSystemMaintenanceMainPanel");
               });
            }
            SystemTimerManager.removeTickFun(this.onTimer);
            return;
         }
         --this._time;
         _mainUI.btnMc.timeTx.text = String(this._time) + "s";
      }
      
      override protected function updatePanel() : void
      {
         this._commdId = getValue("comId")[0];
         var daily_11903:int = int(getValue("daily_11903"));
         if(_mainUI.btnMc.currentFrame == 2)
         {
            _mainUI.gameMc.gotoAndStop(2);
            if(!this._isInitGame)
            {
               this.initGame();
               this._isInitGame = true;
            }
         }
         else
         {
            _mainUI.gameMc.gotoAndStop(1);
         }
      }
      
      override public function hide() : void
      {
         clearTimeout(this._timeOut);
         SystemTimerManager.removeTickFun(this.onTimer);
         super.hide();
      }
   }
}

import com.robot.core.animate.AnimateManager;
import flash.display.MovieClip;
import flash.display.Sprite;

class Cell extends Sprite
{
   public var row:int;
   
   public var col:int;
   
   public var value:int;
   
   public var isActive:Boolean = true;
   
   private var _mainUI:MovieClip;
   
   public function Cell(value:int, mc:MovieClip)
   {
      super();
      this.value = value;
      this._mainUI = mc;
      mc.scaleX = mc.scaleY = 0.5;
      mc.gotoAndStop(value);
      mc["mc" + value].visible = false;
      addChild(mc);
   }
   
   public function select() : void
   {
      graphics.clear();
      graphics.beginFill(16776960);
      graphics.lineStyle(1,0);
      graphics.drawRect(0,0,80,80);
      graphics.endFill();
   }
   
   public function unselect() : void
   {
      if(this.isActive)
      {
         graphics.clear();
      }
   }
   
   public function remove() : void
   {
      this.isActive = false;
      this._mainUI["mc" + this.value].visible = true;
      AnimateManager.playMcAnimate(this._mainUI,this.value,"mc" + this.value,function():void
      {
         visible = false;
      },false,true);
   }
}

import flash.display.DisplayObject;
import flash.display.DisplayObjectContainer;
import flash.display.InteractiveObject;
import flash.display.Sprite;
import flash.events.EventDispatcher;

